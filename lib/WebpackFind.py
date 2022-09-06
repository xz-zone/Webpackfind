#!/usr/bin/env python
# coding: utf-8

import os, threading
from lib.common.utils import Utils
from lib.common.fileoperation import FileOperation
from lib.common.downloadjs import DownloadJs
from lib.common.regular import Regular
from lib.vuln.unauthorized import unauthorized
from lib.common.urlrequest import UrlRequest
from lib.common.Printlog import Printlog
from urllib.parse import urlparse
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor, wait, ALL_COMPLETED

class webpackfind_class(threading.Thread):

    def __init__(self, urllist=[], cookies="", uuid="", pbar=None):
        threading.Thread.__init__(self)
        self.urllist = urllist
        self.cookies = cookies
        self.uuid = uuid
        self.domain = ""
        # 初始化加载规则库
        self.rulesJson = FileOperation().getyml()
        self.log = None
        self.domainlog = ""
        self.pbar = pbar

    # js读取本地文件
    def jsfile_main(self, jsfile=""):
        try:
            # 清空日志文件
            FileOperation().rmlogfile(jsfile)

            self.log = Printlog(jsfile).get_logger()

            # 遍历读取文件目录中的文件
            eachinfo = FileOperation().eachFile(jsfile, 1)

            # 遍历读取文件路径
            eachfile = FileOperation().eachFile(jsfile, 2)

            # 匹配规则库
            Regular().run_Matching_rules(os.path.basename(os.path.realpath(jsfile)), jsfile, eachfile, self.rulesJson)

            # 在所有的urls中提取出目标站的子域名
            Regular().find_subdomain(os.path.basename(os.path.realpath(jsfile)), eachinfo, jsfile, os.path.basename(os.path.realpath(jsfile)))

            # 探测未授权接口
            unauthorized(os.path.basename(os.path.realpath(jsfile)), self.cookies, os.path.basename(os.path.realpath(jsfile)), self.rulesJson, jsfile).run(eachfile)

            self.log.info("{} 【{}】 扫描成功 路径：{}".format(Utils().tellTime(), os.path.basename(os.path.realpath(jsfile)), jsfile))

        except Exception as e:
            self.log.error("{} 【错误异常】：{}".format(Utils().tellTime(), str(e)))

    # 获取js文件url
    def get_js(self, domain="", path=""):
        domain = UrlRequest(self.cookies).Auto_select_protocol(domain)

        self.log.info("{} 【{}】 协议头检测：{}".format(Utils().tellTime(), self.domainlog, str(domain)))

        self.domain = domain

        url = []

        new_domain = ""

        if urlparse(domain).netloc:

            # url自动化遍历读取文件
            content, js_array = UrlRequest(self.cookies).phantomjs_requests(domain)

            for i in range(len(js_array)):
                url.append(js_array[i])

            if content:

                content = BeautifulSoup(content, "html.parser")

                script = content.find_all('script')

                for a in range(len(script)):
                    if script:
                        try:
                            for a in range(len(script)):
                                if urlparse(script[a].get("src")).netloc != "":
                                    if urlparse(self.domain).netloc != urlparse(script[a].get("src")).netloc:
                                        domain = script[a].get("src")
                                    else:
                                        domain = self.domain
                                else:
                                    domain = self.domain

                                if script[a].get("src") != None and script[a].get("src")[0:2] == "//":
                                    scr_path = os.path.basename(script[a].get("src").replace("./", "/"))
                                    if os.path.basename(script[a].get("src").replace("./", "/")).find("?") != -1:
                                        scr_path = os.path.basename(script[a].get("src").replace("./", "/"))[0:os.path.basename(script[a].get("src").replace("./", "/")).find("?")]
                                    if len(js_array) > 0:
                                        if Utils.is_array_value(js_array, Utils.get_filename(scr_path)) == True:
                                            continue
                                elif domain == None:
                                    # 读取js文件路径
                                    js_content = FileOperation().resolve_path(str(script[a]))
                                    for i in range(len(js_content)):
                                        url.append(self.domain + "/" + js_content[i])
                                    url = list(set(url))
                                else:
                                    try:
                                        scheme = "http:"
                                        if urlparse(domain).scheme != "":
                                            scheme = str(urlparse(domain).scheme) + ":"
                                        if urlparse(domain).path:
                                            new_domain = scheme + "//" + urlparse(domain).netloc + "/" + str(urlparse(domain).path).split("/")[1]
                                        else:
                                            new_domain = scheme + "//" + urlparse(domain).netloc
                                        if script[a].get("data-main") != None:
                                            domain_url = new_domain + os.path.normpath(script[a].get("src").replace("./", "/"))
                                            if urlparse(domain).path:
                                                if script[a].get("data-main").find(str(urlparse(new_domain).path).split("/")[1]) != -1:
                                                    domain_url = urlparse(new_domain).scheme + "://" + urlparse(new_domain).netloc + os.path.normpath(script[a].get("data-main")).replace("\\", "/").replace("./", "/")
                                                    if os.path.normpath(script[a].get("data-main")).replace("\\", "/").replace("./", "/")[:1] != "/":
                                                        domain_url = urlparse(new_domain).scheme + "://" + urlparse(new_domain).netloc + "/" + os.path.normpath(script[a].get("data-main")).replace("\\", "/").replace("./", "/")
                                            url.append(domain_url)
                                        elif script[a].get("src") != None:
                                            if "http" in script[a].get("src"):
                                                url.append(script[a].get("src").replace("./", "/"))
                                            elif "runtime." in script[a].get("src") or "app." in script[a].get("src") or "finance." in script[a].get("src") or "vendor." in script[a].get("src") or "manifest." in script[a].get("src"):
                                                if urlparse(os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")).netloc == "":
                                                    domain_url = new_domain + os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")
                                                else:
                                                    domain_url = new_domain + str(scheme + os.path.normpath(script[a].get("src")).replace("\\","/").replace("./", "/")).replace(new_domain, "")
                                                if urlparse(new_domain).path:
                                                    if os.path.normpath(script[a].get("src")).replace("\\","/").replace("./", "/")[:1] != "/":
                                                        if urlparse(os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")).netloc == "":
                                                            domain_url = urlparse(new_domain).scheme + "://" + urlparse(new_domain).netloc + urlparse(new_domain).path + "/" + os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")
                                                        else:
                                                            domain_url = urlparse(new_domain).scheme + "://" + urlparse(new_domain).netloc + urlparse(new_domain).path + "/" + str(scheme + os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")).replace(new_domain, "")
                                                    else:
                                                        if urlparse(os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")).netloc == "":
                                                            domain_url = urlparse(new_domain).scheme + "://" + urlparse(new_domain).netloc + urlparse(new_domain).path + os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")
                                                        else:
                                                            domain_url = urlparse(new_domain).scheme + "://" + urlparse(new_domain).netloc + urlparse(new_domain).path + str(scheme + os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")).replace(new_domain, "")
                                                content = UrlRequest(self.cookies).Extract_html(domain_url)
                                                if content == None:
                                                    try:
                                                        if domain == None:
                                                            domainfname = os.path.join(path, str(urlparse(self.domain).netloc).replace(":", "_") + "_error_js_url_list.txt")
                                                        else:
                                                            domainfname = os.path.join(path, str(urlparse(domain).netloc).replace(":", "_") + "_error_js_url_list.txt")
                                                        FileOperation().save_result(domainfname, domain)
                                                    except Exception as e:
                                                        self.log.error("{} 【写入文件失败】：{}".format(Utils().tellTime(), str(e)))
                                                    continue
                                                else:
                                                    # 读取js文件路径
                                                    js_content = FileOperation().resolve_path(str(content))
                                                    for i in range(len(js_content)):
                                                        url.append(new_domain + "/" + js_content[i])
                                                    url = list(set(url))
                                            else:
                                                script_text = script[a].get("src").replace("./", "/")
                                                if script_text[0] != "/":
                                                    script_text = "/" + script_text
                                                if len(js_array) > 0:
                                                    if Utils.is_array_value(js_array, os.path.basename(script[a].get("src").replace("./", "/"))) == True:
                                                        continue

                                                if urlparse(script_text).scheme == "":
                                                    if urlparse(script_text).netloc != "":
                                                        url.append(scheme + script_text)
                                                    else:
                                                        url.append(new_domain + script_text)
                                                else:
                                                    url.append(new_domain + script_text)
                                    except Exception as e:
                                        self.log.error("{} 【解析js出错】：{}".format(Utils().tellTime(), str(e)))
                                        continue
                        except Exception as e:
                            self.log.error("{} 【解析js出错】：{}".format(Utils().tellTime(), str(e)))
                            pass

                # 解决重复url问题
                new_url = []
                for u in range(len(url)):
                    if Utils().White_list_domain(url[u]):
                        url[u] = url[u].replace("///", "/").replace("\\", "/").replace("./", "/").replace("///", "/")
                        if url[u].find("?") != -1:
                            new_url.append(url[u][:url[u].find("?")])
                        elif url[u].find(";") != -1:
                            new_url.append(url[u][:url[u].find(";")])
                        else:
                            if urlparse(url[u]).netloc == "":
                                continue
                            else:
                                new_url.append(url[u])
                url = list(set(new_url))
                try:
                    if domain == None:
                        domainfname = os.path.join(path, str(urlparse(self.domain).netloc).replace(":", "_") + "_js_url_list.txt")
                    else:
                        domainfname = os.path.join(path, str(urlparse(domain).netloc).replace(":", "_") + "_js_url_list.txt")
                    for u in range(len(url)):
                        FileOperation().save_result(domainfname, str(url[u]))
                    return url
                except Exception as e:
                    self.log.error("{} 【写入文件失败】：{}".format(Utils().tellTime(), str(e)))
                    return url
            elif content == None:
                try:
                    fname = os.path.join(path, str(urlparse(new_domain).netloc).replace(":", "_") + "_error_js_url_list.txt")
                    FileOperation().save_result(fname, domain)
                    return url
                except Exception as e:
                    self.log.error("{} 【写入文件失败】：{}".format(Utils().tellTime(), str(e)))
                    return url
        else:
            self.log.error("{} 【扫描失败】：{}".format(Utils().tellTime(), str(domain)))
            return url

    # 入口函数
    def main(self, domain=""):
        # 声明保存路径
        if urlparse(domain).netloc == "":
            path = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'tmp', self.uuid, str(domain).replace(":", "_"), '')
            self.domainlog = str(domain)
        else:
            path = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'tmp', self.uuid, str(urlparse(domain).netloc).replace(":", "_"), '')
            self.domainlog = str(urlparse(domain).netloc)

        FileOperation().mkdir(path)

        self.log = Printlog(path).get_logger()

        self.log.info("{} 【{}】 初始化创建路径：{}".format(Utils().tellTime(), self.domainlog, path))

        # 读取js文件路径
        info = self.get_js(domain, path)

        if info:

            self.log.info("{} 【{}】 获取到js路径，数量：{}".format(Utils().tellTime(), self.domainlog, len(info)))

            # 扫描结果存入 result.txt
            FileOperation().save_result(os.path.join(path, 'result.txt'), "【URL】：{}".format(str(domain)), "w")

            # 批量下载js
            DownloadJs(self.domainlog, info, path, self.cookies).run()

            # 遍历读取文件目录中的文件
            eachinfo = FileOperation().eachFile(path, 1)

            # 遍历读取文件路径
            eachfile = FileOperation().eachFile(path, 2)

            # 匹配规则库
            Regular().run_Matching_rules(self.domainlog, path, eachfile, self.rulesJson)

            # 在所有的urls中提取出目标站的子域名
            Regular().find_subdomain(self.domainlog, eachinfo, path, domain)

            # 探测未授权接口
            unauthorized(self.domainlog, self.cookies, domain, self.rulesJson, path).run(eachfile)

            self.log.info("{} 【{}】 扫描成功 路径：{}".format(Utils().tellTime(), self.domainlog, str(path)))

        else:

            self.log.info("{} 【扫描失败】：{}".format(Utils().tellTime(), str(domain)))

        self.pbar.update()

    # 主函数
    def run(self):
        while not self.urllist.empty():
            url, i = self.urllist.get()
            self.main(url)
            self.urllist.task_done()



