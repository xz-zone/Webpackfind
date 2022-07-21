#!/usr/bin/env python
# coding: utf-8
import requests, argparse, sys, re, jsbeautifier, os, json, random, platform, traceback
from requests.packages import urllib3
from urllib.parse import urlparse
from bs4 import BeautifulSoup
from uuid import uuid4
from requests.packages.urllib3.exceptions import InsecureRequestWarning
from selenium import webdriver
from selenium.webdriver import DesiredCapabilities
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)


class webpackfind_class(object):

    def __init__(self):
        self.White = ["w3.org", "baidu.com", "sohu.com", "example.com", "purl.org", "microsoft.com",
                      "openxmlformats.org", "purl.oclc.org", "docs.oasis-open.org", "openoffice.org", "raphaeljs.com",
                      "bing.com", "wallstreetcn.com", "mozilla.org", "mozilla.org"]
        self.path = ""

    # 使用set对列表去重，并保持列表原来顺序
    def unique(self, arr):
        arr1 = list(set(arr))
        arr1.sort(key=arr.index)
        return arr1  # 返回去重后的数组

    # 从js内容提取URL。返回链接列表：js_url[]
    def Extract_URL(self, Js_content):
        pattern_raw = r"""
                (?:"|')                               # Start newline delimiter
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
    def Extract_html(self, URL, cookie=''):
        header = {"User-Agent": self.uarand(), "Cookie": cookie}
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
            fname = mainurl + str(urlparse(domain).netloc).replace(":", "_") + "_url_list.txt"
        else:
            fname = mainurl + str(urlparse(domain).path).replace(":", "_") + "_url_list.txt"
        self.save_result(fname, "", "w")
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
        url = []
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
        with open('./pc_ua.json', 'r', encoding='utf8')as fp:
            json_data = json.load(fp)
            return json_data[ie_type[random.randint(0, len(ie_type) - 1)]][
                random.randint(0, len(json_data[ie_type[random.randint(0, len(ie_type) - 1)]]) - 1)]

    # url自动化遍历读取文件
    def url_for(self, domain, path):
        #初始化路径
        self.path = path
        sys = platform.system()
        if sys == "Windows":
            path = r"./phantomjs_windows.exe"
        elif sys == "Linux":
            path = r"./phantomjs_liunx_x64"
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
        if content:
            content = BeautifulSoup(content, "html.parser")
            script = content.find_all('script')
            if script:
                try:
                    for a in range(len(script)):
                        try:
                            if urlparse(domain).path:
                                new_domain = urlparse(domain).scheme + "://" + urlparse(domain).netloc + "/" + str(urlparse(domain).path).split("/")[1]
                            else:
                                new_domain = urlparse(domain).scheme + "://" + urlparse(domain).netloc
                            if script[a].get("data-main") != None:
                                domain_url = new_domain + os.path.normpath(script[a].get("src").replace("./", "/"))
                                if urlparse(domain).path:
                                    if script[a].get("data-main").find(str(urlparse(domain).path).split("/")[1]) != -1:
                                        domain_url = urlparse(domain).scheme + "://" + urlparse(domain).netloc + os.path.normpath(script[a].get("data-main")).replace("\\", "/").replace("./", "/")
                                        if os.path.normpath(script[a].get("data-main")).replace("\\", "/").replace("./", "/")[:1] != "/":
                                            domain_url = urlparse(domain).scheme + "://" + urlparse(domain).netloc + "/" + os.path.normpath(script[a].get("data-main")).replace("\\", "/").replace("./", "/")
                                        else:
                                            domain_url = urlparse(domain).scheme + "://" + urlparse(domain).netloc + os.path.normpath(script[a].get("data-main")).replace("\\", "/").replace("./", "/")
                                url.append(domain_url)
                            if script[a].get("src") != None:
                                if "http" in script[a].get("src"):
                                    url.append(script[a].get("src").replace("./", "/"))
                                elif "runtime." in script[a].get("src") or "app." in script[a].get("src") or "finance." in script[a].get("src"):
                                    domain_url = new_domain + os.path.normpath(script[a].get("src")).replace("\\","/").replace( "./", "/")
                                    if urlparse(domain).path:
                                        if os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./","/")[:1] != "/":
                                            domain_url = urlparse(domain).scheme + "://" + urlparse(domain).netloc + os.path.dirname(urlparse(domain).path) + "/" + os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")
                                        else:
                                            domain_url = urlparse(domain).scheme + "://" + urlparse(domain).netloc + urlparse(domain).path + "/" + os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")
                                    domain_url = domain_url.replace("///", "/").replace("\\", "/").replace("./","/").replace("///", "/")
                                    if "//" in script[a].get("src")[:2]:
                                        domain_url = "http:" + script[a].get("src").replace("./", "/")
                                        content = self.Extract_html(domain_url)
                                    else:
                                        content = self.Extract_html(domain_url)
                                    url.append(domain_url)
                                    if content == None:
                                        try:
                                            fname = self.path + "/" + str(urlparse(domain).netloc).replace(":","_") + "_error_js_url_list.txt"
                                            self.save_result(fname,new_domain + script[a].get("src").replace("./", "/"))
                                        except Exception as e:
                                            print(traceback.print_exc())
                                            print("[E]Write File Failed!!%s" % e)
                                        pass
                                    else:
                                        if content.find("static/js") != -1:
                                            content = content[content.find("static/js"):-1]
                                            content = content[:content.find(".js")]
                                            content = re.findall(r'"(chunk-.*?)":"(.*?)"', str(content))
                                            for co in range(len(content)):
                                                url.append(new_domain + "/static/js/" + content[co][0] + "." + content[co][1] + ".js")
                                        else:
                                            content = content[content.find("js/"):-1]
                                            content = content[:content.find(".js")]
                                            if re.findall(r'\+"\."\+{(.*?)\}\[e\]\+"', str(content)):
                                                content = re.findall(r'"(.*?):"(.*?)"',re.findall(r'\+"\."\+{(.*?)\}\[e\]\+"', str(content))[0])
                                                if content:
                                                    for co in range(len(content)):
                                                        url.append(new_domain + "/js/" + str(content[co][0]).replace("\"","") + "." + content[co][1] + ".js")
                                            else:
                                                content = re.findall(r'"(chunk-.*?)":"(.*?)"', str(content))
                                                for co in range(len(content)):
                                                    url.append(new_domain + "/js/" + content[co][0] + "." + content[co][1] + ".js")
                                elif "manifest." in script[a].get("src"):
                                    domain_url = new_domain + script[a].get("src").replace("./", "/")
                                    if urlparse(domain).path:
                                        if os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")[:1] != "/":
                                            domain_url = urlparse(domain).scheme + "://" + urlparse(domain).netloc + os.path.dirname(urlparse(domain).path) + "/" + os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")
                                        else:
                                            domain_url = urlparse(domain).scheme + "://" + urlparse(domain).netloc + urlparse(domain).path + "/" + os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")
                                    domain_url = domain_url.replace("///", "/").replace("\\", "/").replace("./", "/").replace("///", "/")
                                    if "//" in script[a].get("src")[:2]:
                                        domain_url = "http:" + script[a].get("src").replace("./", "/")
                                        content = self.Extract_html(domain_url)
                                    else:
                                        content = self.Extract_html(domain_url)
                                    url.append(domain_url)
                                    if content == None:
                                        try:
                                            fname = self.path + "/" + str(urlparse(domain).netloc).replace(":","_") + "_error_js_url_list.txt"
                                            self.save_result(fname, domain_url)
                                        except Exception as e:
                                            print(traceback.print_exc())
                                            print("[E]Write File Failed!!%s" % e)
                                        pass
                                    else:
                                        suffix = re.findall(r'([0-9]+?)\.js"', str(content))
                                        if suffix:
                                            suffix = "." + str(suffix[0]) + ".js"
                                        else:
                                            suffix = ".js"
                                        path = re.findall(r'src=(.*?)+"(.*?)\"\+e\+\"', str(content))
                                        if path:
                                            path = "/"+path[0][1]
                                        else:
                                            if content.find("static/js") != -1:
                                                path = "/static/js"
                                            elif str(script[a]).find("js/") != -1:
                                                path = "/js/"
                                            else:
                                                path = ""
                                        content_b = re.findall(r'([0-9]+?):"(.*?)"', str(content))
                                        if content_b:
                                            for co in range(len(content_b)):
                                                url.append(new_domain + path + str(content_b[co][0]).replace("\"", "") + "." + content_b[co][1] + suffix)
                                        else:
                                            webpackJsonp = 0
                                            for fomnew in range(len(script)):
                                                if "app.js" in str(script[fomnew].get("src")):
                                                    newcontent = self.Extract_html(new_domain + "/" + str(script[fomnew].get("src")).replace("./","/"))
                                                    if newcontent:
                                                        webpackJsonp = re.findall(r'webpackJsonp\(\[(\d+?)\]\,', str(newcontent))[0]
                                                    break
                                            if webpackJsonp != 0:
                                                for num in range(0, int(webpackJsonp) + 1):
                                                    if content.find("static/js") != -1:
                                                        url.append(new_domain + str(urlparse(
                                                            new_domain + "/" + str(script[fomnew].get("src")).replace("./", "/")).path).replace("///", "").split("/")[1] + "/static/js/" + str(num) + ".js")
                                                    else:
                                                        url.append(new_domain + str(urlparse(new_domain + "/" + str(script[fomnew].get("src")).replace("./", "/")).path).replace("///", "").split("/")[1] + "/js/" + str(num) + ".js")
                                else:
                                    domain_url = new_domain + os.path.normpath(script[a].get("src").replace("./", "/"))
                                    if urlparse(domain).path:
                                        if os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")[:1] != "/":
                                            domain_url = urlparse(domain).scheme + "://" + urlparse(domain).netloc + os.path.dirname(urlparse(domain).path) + "/" + os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")
                                        else:
                                            domain_url = urlparse(domain).scheme + "://" + urlparse(domain).netloc + urlparse(domain).path + "/" + os.path.normpath(script[a].get("src")).replace("\\", "/").replace("./", "/")
                                    domain_url = domain_url.replace("///", "/").replace("\\", "/").replace("./","/").replace("///", "/")
                                    if "//" in script[a].get("src")[:2]:
                                        domain_url = "http:" + script[a].get("src").replace("./", "/")
                                        url.append(domain_url)
                                    else:
                                        url.append(domain_url)
                            else:
                                if str(script[a]).find("static/js") != -1:
                                    content = str(script[a])
                                    content = content[content.find("static/js"):-1]
                                    content = content[:content.find(".js")]
                                    contenta = re.findall(r'"(chunk-.*?)":"(.*?)"', str(content))
                                    if contenta:
                                        for co in range(len(contenta)):
                                            url.append(new_domain + "/static/js/" + contenta[co][0] + "." + contenta[co][1] + ".js")
                                    else:
                                        if content.find(".chunk") != -1:
                                            content = re.findall(r'([0-9]+?):"(.*?)"', str(content))
                                            if content:
                                                for co in range(len(content)):
                                                    url.append(new_domain + "/static/js/" + str(content[co][0]).replace("\"","") + "." +content[co][1] + ".chunk.js")
                                elif str(script[a]).find("js/") != -1:
                                    content = str(script[a])
                                    content = content[content.find("js/"):-1]
                                    content = content[:content.find(".js")]
                                    content = re.findall(r'"(chunk-.*?)":"(.*?)"', str(content))
                                    for co in range(len(content)):
                                        url.append(new_domain + "/js/" + content[co][0] + "." + content[co][1] + ".js")
                                elif str(script[a].text).find(".js") != -1:
                                    content = str(script[a].text).replace(" ", "").replace("\n", "").replace("\"", "'")
                                    content = re.findall(r'src=\'(.*?)\'', content)
                                    for co in range(len(content)):
                                        if urlparse(content[co]).netloc:
                                            url.append(content[co])
                                        else:
                                            url.append(new_domain + content[co][:content[co].find(".js") + 3].replace("./",""))
                                else:
                                    content = re.findall(r'([0-9]+?):"(.*?)"', str(content))
                                    if content:
                                        for co in range(len(content)):
                                            url.append(new_domain + "/js/" + str(content[co][0]).replace("\"", "") + "." + content[co][1] + ".js")
                        except Exception as e:
                            print(traceback.print_exc())
                            pass
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
                content = self.Extract_html(url[u])
                fname = self.path + "/" + url[u].split('/')[-1]
                try:
                    fp = open(fname, "at", encoding='utf-8')
                    fp.write(jsbeautifier.beautify(content))
                    fp.close()
                except Exception as e:
                    print(traceback.print_exc())
                    print("[E]Write File Failed!!%s" % e)
                    return False
            try:
                fname = self.path + "/" + str(urlparse(domain).netloc).replace(":","_") + "_js_url_list.txt"
                for u in range(len(url)):
                    self.save_result(fname, url[u])
                return True
            except Exception as e:
                print(traceback.print_exc())
                print("[E]Write File Failed!!%s" % e)
                return False
        elif content == None:
            try:
                fname = self.path + "/" + str(urlparse(domain).netloc).replace(":","_") + "_error_js_url_list.txt"
                self.save_result(fname, domain)
                return True
            except Exception as e:
                print(traceback.print_exc())
                print("[E]Write File Failed!!%s" % e)
                return False

    # 检查版本更新
    def get_version(self):
        path = os.path.dirname(os.path.realpath(__file__))
        if os.path.exists(path+'/version.txt'):
            try:
                with open(path+'/version.txt', "rt", encoding="UTF-8") as f:
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
    parser = argparse.ArgumentParser(epilog='\tExample: \r\npython ' + sys.argv[0] + " -u http://www.baidu.com")
    parser.add_argument("-j", "--jsfile", help="遍历目录里面文件")
    parser.add_argument("-u", "--urlfile", help="自动化遍历html里面js")
    parser.add_argument("-s", "--subdomain", default=0, help="提取js中存在的url")
    parser.add_argument("-a", "--all", help="读取txt循环读取url")
    parser.add_argument("-update", "--update", default=0, help="检查版本更新")
    return parser.parse_args()

if __name__ == "__main__":
    urllib3.disable_warnings()
    args = parse_args()
    webpackfind = webpackfind_class()
    if args.update != 0:
        # 检查更新readFile
        webpackfind.get_version()
    elif args.jsfile != None:
        # 格式化代码
        webpackfind.eachFormatJs(args.jsfile)
        info = webpackfind.eachFile(args.jsfile)
        if args.subdomain == 0:
            info = webpackfind.find_subdomain(info, args.jsfile, os.path.basename(os.path.realpath(args.jsfile)))
            print("\n\n==========================================扫描子域名结果=====================================================================\n")
            print(info)
            print("\n==========================================扫描子域名结果=====================================================================")
    elif args.urlfile != None:
        uid = str(uuid4()).split('-')[-1]
        if urlparse(args.urlfile).netloc:
            print("【正在扫描】：" + args.urlfile)
            path = uid+"_"+str(urlparse(args.urlfile).netloc).replace(":","_")+"/"+str(urlparse(args.urlfile).netloc).replace(":","_")
            if webpackfind.mkdir("./js/" + path + "/"):
                info = webpackfind.url_for(args.urlfile,"./js/" + path + "/")
                if info:
                    webpackfind.save_result("./js/" + path + "/" + "/result.txt", "【URL】："+args.urlfile, "w")
                    info = webpackfind.eachFile("./js/" + path + "/")
                    if args.subdomain == 0:
                        info = webpackfind.find_subdomain(info, "./js/" + path + "/", args.urlfile)
                        print("\n\n==========================================扫描子域名结果=====================================================================\n")
                        print(info)
                        print("\n==========================================扫描子域名结果=====================================================================")
                print("【扫描成功】路径：" + "./js/" + path + "/")
        else:
            print("python3 webpackfind.py -u http://www.baidu.com")
    elif args.all != None:
        uid = str(uuid4()).split('-')[-1]
        try:
            file = open(str(args.all), 'r', encoding='utf-8')
            url_list = []
            for line in file.readlines():
                print("【正在扫描】："+line.strip())
                if urlparse(line.strip()).netloc:
                    path = uid+"_all"+"/"+str(urlparse(line.strip()).netloc).replace(":","_")
                    if webpackfind.mkdir("./js/" + path + "/"):
                        info = webpackfind.url_for(line.strip(),"./js/" + path + "/")
                        if info:
                            info = webpackfind.eachFile("./js/" + path + "/")
                            if args.subdomain == 0:
                                info = webpackfind.find_subdomain(info, "./js/" + path + "/", line.strip())
                    print("【扫描成功】路径："+"./js/" + path + "/")
                else:
                    print("【扫描失败】："+str(line.strip()))
        except:
            print("python3 webpackfind.py -u http://www.baidu.com")
    else:  # URL列表
        print("python3 webpackfind.py -u http://www.baidu.com")