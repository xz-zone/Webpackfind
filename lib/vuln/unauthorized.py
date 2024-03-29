#!/usr/bin/env python
# coding: utf-8

import re, requests, chardet, os
from lib.common.utils import Utils
from lib.common.regular import Regular
from requests.packages import urllib3
from urllib.parse import urlparse
from concurrent.futures import ThreadPoolExecutor, wait, ALL_COMPLETED
from requests.packages.urllib3.exceptions import InsecureRequestWarning
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)
from lib.common.Printlog import Printlog


# 未授权检测
class unauthorized():

    def __init__(self, domainlog="", headers={}, domain="", rulesJson=[], path=""):
        urllib3.disable_warnings()
        self.headers = headers
        self.rulesJson = rulesJson
        self.domain = domain
        self.path = path
        self.api_result = []
        self.rules_result = []
        self.domainlog = domainlog

    def run(self, filepath=[]):

        self.log = Printlog(self.path).get_logger()

        self.log.info("{} 【{}】 未授权检测模块加载完成".format(Utils().tellTime(), self.domainlog))

        if len(filepath) > 0:

            # 创建线程池
            pool = ThreadPoolExecutor(len(filepath))

            allTask = [pool.submit(self.api_unauthorized, path) for path in filepath]

            # 开启异步线程池
            wait(allTask, return_when=ALL_COMPLETED)

            # 表格方式输出
            Utils().gettable(["URL", "标题", "响应状态"], "扫描网站：{}".format(self.domain), self.api_result, os.path.join(self.path, 'table_result.txt'))

            Utils().gettable(["模块", "名称", "URL", "内容"], "扫描网站：{}".format(self.domain), self.rules_result, os.path.join(self.path, 'table_result.txt'))

            self.log.info("{} 【{}】 未授权检测模块结果保存路径：{}".format(Utils().tellTime(), self.domainlog, os.path.join(self.path, 'table_result.txt')))

        # log日志输出
        self.log.info("{} 【{}】 未授权检测模块扫描完成".format(Utils().tellTime(), self.domainlog))

    # API未授权探测并检测接口标题
    def api_unauthorized(self, filename=""):
        try:
            fopen = open(filename, 'r', encoding='utf-8')
            data = str(fopen.read())
            fopen.close()
            data = Regular().Extract_URL(data)
            if len(data) != 0:
                for i in range(len(data)):
                    data[i] = data[i].replace('./', '/').replace('\\', '')
                    if data[i][0:2] != "//" and data[i][0] == "/":
                        try:
                            if Utils().filter_content(data[i].replace('', '')):
                                url = self.domain + data[i].replace('', '')
                                status_code = 200
                                info = requests.get(url, headers=self.headers, timeout=10, verify=False, allow_redirects=False)
                                try:
                                    cont = info.content
                                    charset = chardet.detect(info)['encoding']
                                    html_doc = cont.decode(charset)
                                    title = re.findall('<title>(.+)</title>', html_doc)
                                    title = str(title[0])
                                    status_code = info.status_code
                                except Exception as e:
                                    title = "未识别"
                                if info.status_code == 404:
                                    url = urlparse(self.domain).scheme + "://" + urlparse(self.domain).netloc + "/" + data[i].replace('', '')
                                    info1 = requests.get(url, headers=self.headers, timeout=10, verify=False, allow_redirects=False)
                                    try:
                                        cont = info1.content
                                        charset = chardet.detect(info1)['encoding']
                                        html_doc = cont.decode(charset)
                                        title = re.findall('<title>(.+)</title>', html_doc)
                                        title = str(title[0])
                                        status_code = info1.status_code
                                    except Exception as e:
                                        title = "未识别"
                                self.api_result.append([str(url), title, str(status_code)])
                                for i in range(len(self.rulesJson)):
                                    try:
                                        r = re.compile(self.rulesJson[i]['regex'])
                                        result = r.findall(str(info.text))
                                        for ib in range(len(result)):
                                            if Utils().filter_content(data[i].replace('', '')) and Utils().filter_content(result[ib][0]):
                                                self.rules_result.append([self.rulesJson[i]['type_name'], self.rulesJson[i]['name'], str(url), result[ib][0]])
                                    except Exception as e:
                                        pass
                        except Exception as e:
                            pass
        except Exception as e:
            pass
