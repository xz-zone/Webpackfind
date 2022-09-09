# !/usr/bin/env python3
# -*- encoding: utf-8 -*-

import jsbeautifier
from lib.common.urlrequest import UrlRequest
from lib.common.Printlog import Printlog
from lib.common.utils import Utils
from concurrent.futures import ThreadPoolExecutor, wait, ALL_COMPLETED

class DownloadJs():

    def __init__(self, domainlog="", urllist=[], path="", headers={}):
        self.urllist = urllist
        self.path = path
        self.headers = headers
        self.log = Printlog(path).get_logger()
        self.downloadpbar = None
        self.success = 0
        self.error = 0
        self.domainlog = domainlog

    # 主函数
    def run(self):

        # 创建线程池
        pool = ThreadPoolExecutor(20)

        allTask = [pool.submit(self.Download, url) for url in self.urllist]

        # 开启异步线程池
        wait(allTask, return_when=ALL_COMPLETED)

        # log日志输出
        self.log.info("{} 【{}】 【下载完成】总数：{} 成功：{} 失败：{}".format(Utils().tellTime(), self.domainlog, str(len(self.urllist)), str(self.success), str(self.error)))

    def Download(self, url):

        url = url.replace("//", "/").replace(":/", "://")

        # 请求接口
        content = UrlRequest(self.headers).Extract_html(url)

        if content:
            self.success = self.success + 1
            fname = self.path + "/" + url.split('/')[-1]
            try:
                fp = open(fname, "at", encoding='utf-8')
                fp.write(jsbeautifier.beautify(content))
                fp.close()
            except Exception as e:
                self.log.error("{} 【{}】【写入文件失败】：{}".format(Utils().tellTime(), self.domainlog, str(e)))
                return
        else:
            self.error = self.error + 1
            return