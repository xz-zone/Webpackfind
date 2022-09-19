#!/usr/bin/env python
# coding: utf-8

import re, os
from lib.common.utils import Utils
from lib.common.Printlog import Printlog
from urllib.parse import urlparse
from concurrent.futures import ThreadPoolExecutor, wait, ALL_COMPLETED

class Regular():

    def __init__(self):
        self.log = ""

    # 从js内容提取URL。返回链接列表：js_url[]
    def Extract_URL(self, Js_content):
        pattern_raw = r"""
                (?:"|')                             # Start newline delimiter
                (
                ((?:[a-zA-Z]{1,10}://|//)           # Match a scheme [a-Z]*1-10 or //
                [^"'/]{1,}\.                        # Match a domainname (any character + dot)
                [a-zA-Z]{2,}[^"']{0,})              # The domainextension and/or path
                |
                ((?:/|\.\./|\./)                    # Start with /,../,./
                [^"'><,;| *()(%%$^/\\\[\]]          # Next character can't be...
                [^"'><,;|()]{1,})                   # Rest of the characters can't be
                |
                ([a-zA-Z0-9_\-/]{1,}/               # Relative endpoint with /
                [a-zA-Z0-9_\-/]{1,}                 # Resource name
                \.(?:[a-zA-Z]{1,4}|action)          # Rest + extension (length 1-4 or action)
                (?:[\?|#][^"|']{0,}|))              # ? or # mark with parameters
                |
                ([a-zA-Z0-9_\-/]{1,}/               # REST API (no extension) with /
                [a-zA-Z0-9_\-/]{3,}                 # Proper REST endpoints usually have 3+ chars
                (?:[\?|#][^"|']{0,}|))              # ? or # mark with parameters
                |
                ([a-zA-Z0-9_\-]{1,}                 # filename
                \.(?:php|asp|aspx|jsp|json|
                     action|html|js|txt|xml)        # . + extension
                (?:[\?|#][^"|']{0,}|))              # ? or # mark with parameters
                )
                (?:"|')                             # End newline delimiter
            """
        pattern = re.compile(pattern_raw, re.VERBOSE)
        result = re.finditer(pattern, str(Js_content))
        if result == None:
            return None
        js_url = []
        for match in result:
            if match.group() not in js_url:
                js_url.append(match.group().strip('"').strip("'"))

        rule = r"['\"]+[0-9a-zA-Z-:\./?=]{4,}['\"]+"
        r = re.compile(rule)
        result = r.findall(str(Js_content))
        for i in result:
            if "." in i:
                if "/" in i:
                    js_url.append(i.strip('"').strip("'"))
        js_url = Utils().unique(js_url)
        return js_url

    # 在所有的urls中提取出目标站的子域名
    def find_subdomain(self, domainlog="", urls=[], mainurl="", domain=""):

        self.log = Printlog(mainurl).get_logger()

        self.log.info("{} 【{}】 子域名提取规则模块加载完成".format(Utils().tellTime(), domainlog))

        if urlparse(domain).netloc:
            fname = os.path.join(mainurl, str(urlparse(domain).netloc).replace(":", "_") + "_url_list.txt")
        else:
            fname = os.path.join(mainurl, str(urlparse(domain).path).replace(":", "_") + "_url_list.txt")
        pattern = re.compile(
            r'^(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|'
            r'([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|'
            r'([a-zA-Z0-9][-_.a-zA-Z0-9]{0,61}[a-zA-Z0-9]))\.'
            r'([a-zA-Z]{2,13}|[a-zA-Z0-9-]{2,30}.[a-zA-Z]{2,3})$'
        )
        miandomain = urlparse(mainurl).netloc
        positions = Utils().find_last(domain, ".")
        if len(positions) > 1:
            miandomain = domain[positions[-2] + 1:].replace("/", "")
        subdomains = []
        for url in urls:
            suburl = urlparse(url)
            subdomain = suburl.netloc
            if subdomain.strip() == "":
                continue
            if miandomain in subdomain:
                if subdomain not in subdomains:
                    if Utils().White_list_domain(subdomain):
                        if pattern.match(subdomain):
                            if Utils().filter_content(subdomain):
                                subdomains.append(subdomain)
                                self.save_result(fname, subdomain)
                        else:
                            check_ip = re.compile('(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]):(6[0-5]{2}[0-3][0-5]|[1-5]\d{4}|[1-9]\d{1,3}|[0-9])|(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])')
                            if check_ip.match(subdomain):
                                if Utils().filter_content(subdomain):
                                    subdomains.append(subdomain)
                                    self.save_result(fname, subdomain)
        subdomains = list(set(subdomains))
        new_subdomains = []
        for i in range(len(subdomains)):
            new_subdomains.append([i, subdomains[i]])

        # 子域名表格方式输出
        Utils().gettable(["序号", "子域名"], "扫描完成：{}".format(domain), new_subdomains, os.path.join(mainurl, "table_result.txt"))

        self.log.info("{} 【{}】 子域名提取结果保存路径：{}".format(Utils().tellTime(), domainlog, os.path.join(mainurl, "table_result.txt")))

        self.log.info("{} 【{}】 子域名提取规则模块扫描完成".format(Utils().tellTime(), domainlog))

        return subdomains

    def run_Matching_rules(self, domainlog="", path="", filepath=[], rulesJson=[]):

        self.log = Printlog(path).get_logger()

        self.log.info("{} 【{}】 Hae规则匹配模块加载完成".format(Utils().tellTime(), domainlog))

        # 创建线程池
        pool = ThreadPoolExecutor(20)

        allTask = [pool.submit(self.Matching_rules, url, rulesJson) for url in filepath]

        # 开启异步线程池
        wait(allTask, return_when=ALL_COMPLETED)

        self.log.info("{} 【{}】 Hae规则匹配结果保存路径：{}".format(Utils().tellTime(), domainlog, os.path.join(path, "table_result.txt")))

        self.log.info("{} 【{}】 Hae规则匹配模块扫描完成".format(Utils().tellTime(), domainlog))

    # 匹配规则库
    def Matching_rules(self, filename="", rulesJson=[]):
        try:
            fopen = open(filename, 'r', encoding='utf-8')
            data = str(fopen.read())
            fopen.close()
            array = []
            count = 0
            for i in range(len(rulesJson)):
                try:
                    r = re.compile(rulesJson[i]['regex'])
                    result = r.findall(str(data))
                    for ib in range(len(result)):
                        if Utils().filter_content(result[ib][0]):
                            array.append([rulesJson[i]['type_name'], rulesJson[i]['name'], result[ib][0]])
                            count = count + 1
                except Exception as e:
                    pass
            if count != 0:
                self.save_result(os.path.join(os.path.dirname(filename), "/result_rules.txt"), "【+】" + filename)
                # 子域名表格方式输出

                Utils().gettable(["模块", "名称", "内容"], "路径：{}".format(filename), array, os.path.join(os.path.dirname(filename), "table_result.txt"))

        except Exception as e:
            return

    # 写入文件
    def save_result(self, filename="", content="", jurisdiction="at"):
        fp = open(filename, jurisdiction, encoding='utf-8')
        fp.write(content + "\n")
        fp.close()