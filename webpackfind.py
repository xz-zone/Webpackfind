#!/usr/bin/env python
# coding: utf-8
import requests, argparse, sys, re, jsbeautifier, os, json, random, platform, traceback, threading, time
from requests.packages import urllib3
from urllib.parse import urlparse
from bs4 import BeautifulSoup
from uuid import uuid4
from requests.packages.urllib3.exceptions import InsecureRequestWarning
from selenium import webdriver
from selenium.webdriver import DesiredCapabilities
from prettytable import PrettyTable
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)


class webpackfind_class(object):

    def __init__(self, cookies=""):
        self.White = ["w3.org", "example.com", "purl.org", "microsoft.com",
                      "openxmlformats.org", "purl.oclc.org", "docs.oasis-open.org", "openoffice.org", "raphaeljs.com",
                      "bing.com", "wallstreetcn.com", "mozilla.org", "mozilla.org"]
        self.path = ""
        self.domain = ""
        self.cookies = cookies
        self.path = ""
        self.uuid = ""

    # 使用set对列表去重，并保持列表原来顺序
    def unique(self, arr):
        arr1 = list(set(arr))
        arr1.sort(key=arr.index)
        return arr1  # 返回去重后的数组

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
        js_url = self.unique(js_url)
        return js_url

    # 提取页面源码，返回值为页面源码
    def Extract_html(self, URL):
        header = {"User-Agent": self.uarand(), "Cookie": self.cookies}
        try:
            re = requests.get(URL, headers=header, timeout=30, verify=False, allow_redirects=False)
            if re.status_code == 200:
                raw = re.content.decode("utf-8", "ignore")
                return raw
            else:
                print("[-]Status_code not 200 url:" + URL)
                return None
        except Exception as e:
            try:
                re = requests.get(URL, headers=header, timeout=30, verify=False, allow_redirects=False)
                if re.status_code == 200:
                    raw = re.content.decode("utf-8", "ignore")
                    return raw
                else:
                    print("[-]Status_code not 200 url:"+URL)
                    return None
            except Exception as e:
                return None

    # 写入文件
    def save_result(self, filename="", content="", jurisdiction="at"):
        fp = open(filename, jurisdiction, encoding='utf-8')
        fp.write(content + "\n")
        fp.close()

    # 创建文件夹
    def mkdir(self, path):
        path = path.strip()
        path = path.rstrip("\\")
        isExists = os.path.exists(path)
        if not isExists:
            os.makedirs(path)
            # print(path + ' 创建成功')
            return True
        else:
            # print(path + ' 目录已存在，正在清空目录重新更新文件。。。')
            self.del_file(path)
            return True

    # 清空文件夹内容
    def del_file(self, path):
        ls = os.listdir(path)
        for i in ls:
            c_path = os.path.join(path, i)
            if os.path.isdir(c_path):
                self.del_file(c_path)
            else:
                os.remove(c_path)

    # 返回一个列表，内容为目标字符在字符串中的位置 [3, 7, 10]
    def find_last(self, string, str):
        positions = []
        last_position = -1
        while True:
            position = string.find(str, last_position + 1)
            if position == -1: break
            last_position = position
            positions.append(position)
        return positions

    # 在所有的urls中提取出目标站的子域名
    def find_subdomain(self, urls, mainurl, domain):
        if urlparse(domain).netloc:
            fname = mainurl + "/" + str(urlparse(domain).netloc).replace(":", "_") + "_url_list.txt"
        else:
            fname = mainurl + "/" + str(urlparse(domain).path).replace(":", "_") + "_url_list.txt"
        pattern = re.compile(
            r'^(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|'
            r'([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|'
            r'([a-zA-Z0-9][-_.a-zA-Z0-9]{0,61}[a-zA-Z0-9]))\.'
            r'([a-zA-Z]{2,13}|[a-zA-Z0-9-]{2,30}.[a-zA-Z]{2,3})$'
        )
        url_raw = urlparse(mainurl)
        domain = url_raw.netloc
        miandomain = domain
        positions = self.find_last(domain, ".")
        if len(positions) > 1: miandomain = domain[positions[-2] + 1:]
        subdomains = []
        for url in urls:
            suburl = urlparse(url)
            subdomain = suburl.netloc
            if subdomain.strip() == "": continue
            if miandomain in subdomain:
                if subdomain not in subdomains:
                    if self.White_list_domain(subdomain):
                        if pattern.match(subdomain):
                            subdomains.append(subdomain)
                            self.save_result(fname, subdomain)
                        else:
                            check_ip = re.compile('(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]):(6[0-5]{2}[0-3][0-5]|[1-5]\d{4}|[1-9]\d{1,3}|[0-9])|(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])')
                            if check_ip.match(subdomain):
                                subdomains.append(subdomain)
                                self.save_result(fname, subdomain)

        return subdomains

    # 遍历指定目录，显示目录下的所有文件名
    def eachFile(self, filepath):
        url = []
        pathDir = os.listdir(filepath)
        for allDir in pathDir:
            child = os.path.join('%s%s' % (filepath, allDir))
            info = self.readFile(child)
            if info:
                for u in range(len(info)):
                    url.append(info[u])
        return url

    # 遍历指定目录，并格式化js源码
    def eachFormatJs(self, filepath):
        pathDir = os.listdir(filepath)
        for allDir in pathDir:
            child = os.path.join('%s%s' % (filepath, allDir))
            # 读取文件
            fopen = open(child, 'r', encoding='utf-8')
            txt = jsbeautifier.beautify(fopen.read())
            fopen.close()
            # 写入文件
            file_object = open(child, 'w', encoding='utf-8')
            file_object.write(txt)
            file_object.close()

    # 读取文件内容并打印
    def readFile(self, filename):
        url = []
        fopen = open(filename, 'r', encoding='utf-8')
        data = self.Extract_URL(fopen.read())
        self.save_result(os.path.dirname(filename) + "/result.txt", "【+】" + filename)
        for x in data:
            self.save_result(os.path.dirname(filename) + "/result.txt", "      " + str(x))
            url.append(x)
        fopen.close()
        return url

    # 白名单判断是否过滤那个域名
    def White_list_domain(self, domain):
        for t in range(len(self.White)):
            if self.White[t] in domain:
                return False
        return True

    # 随机获取ua库
    def uarand(self):
        ie_type = ["chrome", "opera", "firefox", "internetexplorer", "safari"]
        with open(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'pc_ua.json'), 'r', encoding='utf8')as fp:
            json_data = json.load(fp)
            return json_data[ie_type[random.randint(0, len(ie_type) - 1)]][
                random.randint(0, len(json_data[ie_type[random.randint(0, len(ie_type) - 1)]]) - 1)]

    # url自动化遍历读取文件
    def url_for(self, domain, path):
        #初始化路径
        self.path = path
        self.domain = domain
        sys = platform.system()
        if sys == "Windows":
            path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'phantomjs_windows.exe')
        elif sys == "Linux":
            path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'phantomjs_liunx_x64')
        else:
            return False
        try:
            desired_capabilities = DesiredCapabilities.PHANTOMJS.copy()
            ua = self.uarand()
            desired_capabilities["phantomjs.page.settings.userAgent"] = ua
            desired_capabilities["phantomjs.page.customHeaders.User-Agent"] = ua
            desired_capabilities["phantomjs.page.settings.resourceTimeout"] = True
            desired_capabilities["phantomjs.page.settings.disk-cache"] = True
            desired_capabilities["phantomjs.page.settings.loadImages"] = True
            driver = webdriver.PhantomJS(executable_path=path, desired_capabilities=desired_capabilities, service_args=['--ignore-ssl-errors=true'])
            driver.set_page_load_timeout(20)
            driver.set_script_timeout(20)
            driver.get(domain)
            content = driver.page_source
            if urlparse(driver.current_url).netloc != urlparse(domain).netloc:
                content = self.Extract_html(domain)
        except Exception as e:
            content = self.Extract_html(domain)
        url = []
        new_domain = ""
        if content:
            content = BeautifulSoup(content, "html.parser")
            script = content.find_all('script')
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
                        if domain == None:
                            content = str(script[a])
                            if self.analysis(content) == True:
                                if content.find("static/js") != -1:
                                    content = content[content.find("static/js"):-1]
                                    content = content[:content.find(".js")]
                                    new_domain = self.domain + "/static/js/"
                                elif content.find("js/") != -1:
                                    content = content[content.find("js/"):-1]
                                    content = content[:content.find(".js")]
                                    new_domain = self.domain + "/js/"
                                if re.findall(r'([0-9]+?):(\s){0,1}"([a-zA-Z0-9].*?)"', str(content)):
                                    content = re.findall(r'([0-9]+?):(\s){0,1}"([a-zA-Z0-9].*?)"', str(content))
                                    if content:
                                        for co in range(len(content)):
                                            if str(content[co][-1:][0]) != "string" and len(content[co][-1:][0]) >= 2:
                                                url.append(new_domain + str(content[co][:1][0]).replace("\"", "") + "." + str(content[co][-1:][0]) + ".js")
                                elif re.findall(r'"(chunk-.*?)":(\s){0,1}"(.*?)"', str(content)):
                                    content = re.findall(r'"(chunk-.*?)":(\s){0,1}"(.*?)"', str(content))
                                    for co in range(len(content)):
                                        url.append(new_domain + str(content[co][:1][0]) + "." + str(content[co][-1:][0]) + ".js")
                                elif re.findall(r'\+"\."\+{(.*?)\}\[e\]\+"', str(content)):
                                    content = re.findall(r'"(.*?):"(.*?)"',re.findall(r'\+"\."\+{(.*?)\}\[e\]\+"', str(content))[0])
                                    if content:
                                        for co in range(len(content)):
                                            url.append(new_domain + str(content[co][:1][0]).replace("\"", "") + "." + str(content[co][-1:][0]) + ".js")
                            else:
                                continue
                        else:
                            try:
                                scheme = "http:"
                                if urlparse(domain).scheme != "":
                                    scheme = str(urlparse(domain).scheme)+":"
                                if urlparse(domain).path:
                                    new_domain = scheme + "//" + urlparse(domain).netloc + "/" + str(urlparse(domain).path).split("/")[1]
                                else:
                                    new_domain = scheme + "//" + urlparse(domain).netloc
                                if script[a].get("data-main") != None:
                                    domain_url = new_domain + os.path.normpath(script[a].get("src").replace("./", "/"))
                                    if urlparse(domain).path:
                                        if script[a].get("data-main").find(str(urlparse(new_domain).path).split("/")[1]) != -1:
                                            domain_url = urlparse(new_domain).scheme + "://" + urlparse(new_domain).netloc + os.path.normpath(script[a].get("data-main")).replace("\\","/").replace("./", "/")
                                            if os.path.normpath(script[a].get("data-main")).replace("\\", "/").replace("./","/")[:1] != "/":
                                                domain_url = urlparse(new_domain).scheme + "://" + urlparse(new_domain).netloc + "/" + os.path.normpath(script[a].get("data-main")).replace("\\", "/").replace("./", "/")
                                            else:
                                                domain_url = urlparse(new_domain).scheme + "://" + urlparse(new_domain).netloc + os.path.normpath(script[a].get("data-main")).replace("\\", "/").replace("./", "/")
                                    url.append(domain_url)
                                elif script[a].get("src") != None:
                                    if "http" in script[a].get("src"):
                                        url.append(script[a].get("src").replace("./", "/"))
                                    elif "runtime." in script[a].get("src") or "app." in script[a].get("src") or "finance." in script[a].get("src") or "vendor." in script[a].get("src") or "manifest." in script[a].get("src"):
                                        if urlparse(os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")).netloc == "":
                                            domain_url = new_domain + os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")
                                        else:
                                            domain_url = new_domain + str(scheme+os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")).replace(new_domain, "")
                                        if urlparse(new_domain).path:
                                            if os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")[:1] != "/":
                                                if urlparse(os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")).netloc == "":
                                                    domain_url = urlparse(new_domain).scheme + "://" + urlparse(new_domain).netloc + urlparse(new_domain).path + "/" + os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")
                                                else:
                                                    domain_url = urlparse(new_domain).scheme + "://" + urlparse(new_domain).netloc + urlparse(new_domain).path + "/" + str(scheme+os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")).replace(new_domain, "")
                                            else:
                                                if urlparse(os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")).netloc == "":
                                                    domain_url = urlparse(new_domain).scheme + "://" + urlparse(new_domain).netloc + urlparse(new_domain).path + os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")
                                                else:
                                                    domain_url = urlparse(new_domain).scheme + "://" + urlparse(new_domain).netloc + urlparse(new_domain).path + str(scheme+os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")).replace(new_domain, "")
                                        content = self.Extract_html(domain_url)
                                        if content == None:
                                            try:
                                                fname = self.path + "/" + str(urlparse(new_domain).netloc).replace(":","_") + "_error_js_url_list.txt"
                                                self.save_result(fname, new_domain + script[a].get("src").replace("./", "/"))
                                            except Exception as e:
                                                print(traceback.print_exc())
                                                print("[E]Write File Failed!!%s" % e)
                                            continue
                                        else:
                                            if content.find("static/js") != -1:
                                                content = content[content.find("static/js"):-1]
                                                content = content[:content.find(".js")]
                                                if self.analysis(content) == True:
                                                    if domain_url.find("static/js"):
                                                        new_domain = domain_url[:domain_url.find("static/js")] + "/static/js/"
                                            elif content.find("js/") != -1:
                                                content = content[content.find("js/"):-1]
                                                content = content[:content.find(".js")]
                                                if self.analysis(content) == True:
                                                    if domain_url.find("static/js"):
                                                        new_domain = domain_url[:domain_url.find("/js")] + "/js/"
                                            if self.analysis(content) == True:
                                                if re.findall(r'([0-9]+?):(\s){0,1}"([a-zA-Z0-9]*?)"', str(content)):
                                                    content = re.findall(r'([0-9]+?):(\s){0,1}"([a-zA-Z0-9]*?)"', str(content))
                                                    if content:
                                                        for co in range(len(content)):
                                                            if len(content[co][-1:][0]) > 2:
                                                                if content[co][-1:][0] == "string" or str(content[co][-1:][0]) == "visible":
                                                                    continue
                                                                else:
                                                                    url.append(new_domain + str(content[co][:1][0]).replace("\"","") + "." + str(content[co][-1:][0]) + ".js")
                                                elif re.findall(r'"(chunk-.*?)":(\s){0,1}"(.*?)"', str(content)):
                                                    content = re.findall(r'"(chunk-.*?)":(\s){0,1}"(.*?)"', str(content))
                                                    for co in range(len(content)):
                                                        url.append(new_domain + str(content[co][:1][0]) + "." + str(content[co][-1:][0]) + ".js")
                                                elif re.findall(r'\+"\."\+{(.*?)\}\[e\]\+"', str(content)):
                                                    content = re.findall(r'"(.*?):"(.*?)"', re.findall(r'\+"\."\+{(.*?)\}\[e\]\+"', str(content))[0])
                                                    if content:
                                                        for co in range(len(content)):
                                                            url.append(new_domain + str(content[co][:1][0]).replace("\"","") + "." + str(content[co][-1:][0]) + ".js")
                                    else:
                                        if urlparse(script[a].get("src").replace("./", "/")).scheme == "":
                                            if urlparse(script[a].get("src").replace("./", "/")).netloc != "":
                                                url.append(scheme + script[a].get("src").replace("./", "/"))
                                            else:
                                                url.append(new_domain + script[a].get("src").replace("./", "/"))
                                        else:
                                            url.append(new_domain + script[a].get("src").replace("./", "/"))
                            except Exception as e:
                                print(traceback.print_exc())
                                continue
                except Exception as e:
                    print(traceback.print_exc())
                    pass
            # 解决重复url问题
            new_url = []
            for u in range(len(url)):
                if self.White_list_domain(url[u]):
                    url[u] = url[u].replace("///", "/").replace("\\", "/").replace("./", "/").replace("///", "/")
                    if url[u].find("?") != -1:
                        new_url.append(url[u][:url[u].find("?")])
                    elif url[u].find(";") != -1:
                        new_url.append(url[u][:url[u].find(";")])
                    else:
                        new_url.append(url[u])
            url = list(set(new_url))

            for u in range(len(url)):
                if os.path.basename(urlparse(url[u]).path):
                    content = self.Extract_html(url[u])
                    fname = self.path + "/" + url[u].split('/')[-1]
                    try:
                        fp = open(fname, "at", encoding='utf-8')
                        fp.write(jsbeautifier.beautify(content))
                        fp.close()
                    except Exception as e:
                        print(traceback.print_exc())
                        print("[E]Write File Failed!!%s" % e)
                        continue
                else:
                    continue
            try:
                if domain == None:
                    domainfname = self.path + "/" + str(urlparse(self.domain).netloc).replace(":","_") + "_js_url_list.txt"
                else:
                    domainfname = self.path + "/" + str(urlparse(domain).netloc).replace(":","_") + "_js_url_list.txt"
                for u in range(len(url)):
                    self.save_result(domainfname, url[u])
                return True
            except Exception as e:
                print(traceback.print_exc())
                print("[E]Write File Failed!!%s" % e)
                return False
        elif content == None:
            try:
                if domain == None:
                    domainfname = self.path + "/" + str(urlparse(self.domain).netloc).replace(":","_") + "_error_js_url_list.txt"
                else:
                    domainfname = self.path + "/" + str(urlparse(domain).netloc).replace(":","_") + "_error_js_url_list.txt"
                self.save_result(domainfname, domain)
                return True
            except Exception as e:
                print(traceback.print_exc())
                print("[E]Write File Failed!!%s" % e)
                return False

    # 解析包js路径
    def analysis(self, content):
        if re.findall(r'([0-9]+?):(\s){0,1}"([a-zA-Z0-9].*?)"', str(content)):
            return True
        elif re.findall(r'\+"\."\+{(.*?)\}\[e\]\+"', str(content)):
            return True
        elif re.findall(r'"(chunk-.*?)":(\s){0,1}"(.*?)"', str(content)):
            return True
        else:
            return False

    # 检查版本更新
    def get_version(self):
        path = os.path.join(os.path.dirname(os.path.realpath(__file__)),'version.txt')
        if os.path.exists(path):
            try:
                with open(path, "rt", encoding="UTF-8") as f:
                    now_version = f.read().strip()
                print("目前版本: \n{}\n".format(now_version))
                version_url = "https://raw.githubusercontent.com/xz-zone/Webpackfind/master/version.txt"
                res = requests.get(url=version_url, headers={"User-Agent": self.uarand()}, timeout=10, verify=False)
                if res.status_code == 200:
                    new_version = res.text.strip()
                    if now_version == new_version:
                        print("目前版本最新")
                    else:
                        add_version = str(str(new_version.replace("\r","").replace("\n","")).replace(str(now_version.replace("\n","")),"")).replace("。","。\n")
                        if add_version:
                            print("更新内容如下:\n{}".format(add_version))
                        print("目前版本非最新，建议及时更新...\n地址: https://github.com/xz-zone/Webpackfind/\n")
                else:
                    print("获取版本信息失败...")
            except Exception as e:
                print("获取版本信息失败...")
        else:
            print("目前版本非最新，建议及时更新...\n地址: https://github.com/xz-zone/Webpackfind/")

    # 自动选择http/https模式
    def Automatic_selection_scheme(self, URL):
        header = {"User-Agent": self.uarand(), "Cookie": self.cookies}
        try:
            re = requests.get(URL, headers=header, timeout=10, verify=False, allow_redirects=False)
            if re.status_code == 200:
                return True
            else:
                return None
        except Exception as e:
            try:
                re = requests.get(URL, headers=header, timeout=10, verify=False, allow_redirects=False)
                if re.status_code == 200:
                    return True
                else:
                    return None
            except Exception as e:
                return None

    # 启动函数
    def start(self, url, i=0):
        try:
            scheme = urlparse(url).scheme
            # 自动判断url地址是否添加http/https协议
            if "http" in scheme or "https" in scheme:
                url = url
            else:
                if self.Automatic_selection_scheme("http://" + url) == None:
                    if self.Automatic_selection_scheme("https://" + url) == None:
                        print("【扫描失败】：{}\n".format(str(url)))
                        return False
                    else:
                        url = "https://" + url
                else:
                    url = "http://" + url
            if urlparse(url).netloc:
                if i == 0:
                    # 生成随机路径
                    self.uuid = str(uuid4()).split('-')[-1] + "/"

                path = self.uuid + str(urlparse(url).netloc).replace(":", "_")

                # 判断目录是否存在/不存在则创建
                if self.mkdir(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'js', path)):

                    # url自动化遍历读取文件
                    info = self.url_for(url, os.path.join(os.path.dirname(os.path.realpath(__file__)), 'js', path))
                    if info:
                        # 扫描结果存入 result.txt
                        self.save_result(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'js', path, 'result.txt'),"【URL】：{}".format(str(url)), "w")

                        #遍历读取文件目录中的文件
                        eachinfo = self.eachFile(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'js', path, ''))

                        # 在所有的urls中提取出目标站的子域名
                        info = self.find_subdomain(eachinfo, os.path.join(os.path.dirname(os.path.realpath(__file__)), 'js', path), url)

                        # 表格方式输出
                        tb = PrettyTable(align="l", header=True, padding_width=5, field_names=["序号", "子域名"], title="扫描完成：{}".format(url))

                        for i in range(len(info)):
                            tb.add_row([i, info[i]])

                        print(tb)

                    print("【扫描成功】路径：{}\n".format(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'js', path)))
            else:
                print("【扫描失败】：{}\n".format(str(url)))
        except:
            print(traceback.print_exc())
            print(help())

# 接收外部参数
def parse_args():
    print('''               _                      _      _             _          
                  | |                    | |   / _(_)         | |
     __      _____| |__  _ __   __ _  ___| | _| |_ _ _ __   __| |
     \ \ /\ / / _ \ '_ \| '_ \ / _` |/ __| |/ /  _| | '_ \ / _` |
      \ V  V /  __/ |_) | |_) | (_| | (__|   <| | | | | | | (_| |
       \_/\_/ \___|_.__/| .__/ \__,_|\___|_|\_\_| |_|_| |_|\__,_|       author:小洲
                        | |                                      
                        |_|                                   
            ''')
    parser = argparse.ArgumentParser(description=help(), add_help=False)
    parser.add_argument("-u", "--urlfile", help="自动化遍历URL中里面js")
    parser.add_argument("-j", "--jsfile", help="遍历本地目录中的js文件并且格式化js文件、提取信息泄露")
    parser.add_argument("-f", "--file", help="读取本地url文件批量遍历url中js")
    parser.add_argument("-c", "--cookies", help="设置自定义Cookie，场景:需要登录才能爬取js信息")
    parser.add_argument("-update", "--update", type=int, default=0, help="检查版本更新")
    return parser.parse_args()

# 帮助文档输出
def help():
    return '''
    例子：
        自动化遍历URL中里面js
        python3 webpackfind.py -u http://domain.com

        遍历本地目录中的js文件并且格式化js文件、提取信息泄露
        python3 webpackfind.py -j ./js/test.com/

        读取本地url文件批量遍历url中js
        python3 webpackfind.py -f ./url.txt

        设置自定义Cookie，场景:需要登录才能爬取js信息
        python3 webpackfind.py -c "name=test;" -u http://domain.com

        检查本地`webpackfind.py`是否与github.com是否一致
        python3 webpackfind.py -update 1
         '''

if __name__ == "__main__":
    urllib3.disable_warnings()
    args = parse_args()
    if args.cookies == None:
        args.cookies = ""

    webpackfind = webpackfind_class(args.cookies)

    if args.update != 0:
        # 检查更新readFile
        webpackfind.get_version()
    elif args.jsfile != None:
        # 格式化代码
        webpackfind.eachFormatJs(args.jsfile)
        eachinfo = webpackfind.eachFile(args.jsfile)
        info = webpackfind.find_subdomain(eachinfo, args.jsfile, os.path.basename(os.path.realpath(args.jsfile)))
        # 表格方式输出
        tb = PrettyTable(align="l", header=True, padding_width=5, field_names=["序号", "子域名"], title="扫描完成：{}".format(args.jsfile))

        for i in range(len(info)):
            tb.add_row([i, info[i]])

        print(tb)
    elif args.urlfile != None:
        try:
            webpackfind.start(args.urlfile, 0)
        except:
            print(traceback.print_exc())
            print(help())
    elif args.file != None:
        try:
            threads = []
            file = open(str(args.file), 'r', encoding='utf-8')
            urllist = file.readlines()
            for i in range(len(urllist)):
                t = threading.Thread(target=webpackfind.start, args=(urllist[i].strip(), i))
                threads.append(t)
                t.start()
                time.sleep(1)
            for t in threads:
                t.join()
        except:
            print(traceback.print_exc())
            print(help())
    else:
        print(help())