#!/usr/bin/env python
# coding: utf-8
import requests, argparse, sys, re, jsbeautifier, os, json, random, platform, os
from requests.packages import urllib3
from urllib.parse import urlparse
from bs4 import BeautifulSoup
from requests.packages.urllib3.exceptions import InsecureRequestWarning
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)

# 使用set对列表去重，并保持列表原来顺序
def unique(arr):
    # print("[+]源文件共有: {}条数据".format(len(arr)))
    arr1 = list(set(arr))
    arr1.sort(key=arr.index)
    # print("[+]去重后还有: {}条数据".format(len(arr1)))
    return arr1  # 返回去重后的数组

# 从js内容提取URL。返回链接列表：js_url[]
def Extract_URL(Js_content):
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
            (?:[\?|/][^"|']{0,}|))              # ? mark with parameters
            |
            ([a-zA-Z0-9_\-]{1,}                 # filename
            \.(?:php|asp|aspx|jsp|json|
                 action|html|js|txt|xml)             # . + extension
            (?:\?[^"|']{0,}|))                  # ? mark with parameters
          )
          (?:"|')                               # End newline delimiter
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
    js_url = unique(js_url)
    return js_url

# 提取页面源码，返回值为页面源码
def Extract_html(URL, cookie=''):
    # print(cookie)
    header = {"User-Agent": uarand(), "Cookie": cookie}
    try:
        re = requests.get(URL, headers=header, timeout=30, verify=False, allow_redirects=False)
        if re.status_code == 200:
            raw = re.content.decode("utf-8", "ignore")
            return raw
        else:
            print("[-]Status_code not 200")
            return None

    except Exception as e:
        try:
            re = requests.get(URL, headers=header, timeout=30, verify=False, allow_redirects=False)
            if re.status_code == 200:
                raw = re.content.decode("utf-8", "ignore")
                return raw
            else:
                print("[-]Status_code not 200")
                return None
        except Exception as e:
            return None


# 处理相对路径，返回完整的js链接
def process_url(URL, re_URL):
    black_url = ["javascript:"]  # Add some keyword for filter url.
    URL_raw = urlparse(URL)
    # print(URL_raw)
    ab_PATH = URL_raw.path.split("/")[0:-1]
    ab_URL = URL_raw.netloc + "/".join(ab_PATH)
    # ab_PATH = ab_PATH[0:-1]
    # print(ab_URL)
    host_URL = URL_raw.scheme
    if re_URL[0:2] == "//":
        result = host_URL + ":" + re_URL
    elif re_URL[0:4] == "http":
        result = re_URL
    elif re_URL[0:2] != "//" and re_URL not in black_url:
        if re_URL[0:1] == "/":
            result = host_URL + "://" + ab_URL + re_URL
        else:
            if re_URL[0:1] == ".":
                if re_URL[0:2] == "..":
                    result = host_URL + "://" + ab_URL + re_URL[2:]
                else:
                    result = host_URL + "://" + ab_URL + re_URL[1:]
            else:
                result = host_URL + "://" + ab_URL + "/" + re_URL
    else:
        result = URL
    return result

def parse_args():
    parser = argparse.ArgumentParser(epilog='\tExample: \r\npython ' + sys.argv[0] + " -u http://www.baidu.com")
    parser.add_argument("-u", "--url", help="自动化遍历html里面js")
    parser.add_argument("-j", "--jsfile", help="遍历目录里面文件")
    return parser.parse_args()

# 遍历指定目录，显示目录下的所有文件名
def eachFile(filepath):
    pathDir = os.listdir(filepath)
    for allDir in pathDir:
        child = os.path.join('%s%s' % (filepath, allDir))
        readFile(child)

# 读取文件内容并打印
def readFile(filename):
    fopen = open(filename, 'r', encoding='utf-8')
    data = Extract_URL(fopen.read())
    print("【+】" + filename)
    for x in data:
        print("      " + x)
    fopen.close()

# 随机获取ua库
def uarand():
    ie_type = ["chrome", "opera", "firefox", "internetexplorer", "safari"]
    with open('./pc_ua.json', 'r', encoding='utf8')as fp:
        json_data = json.load(fp)
        return json_data[ie_type[random.randint(0, len(ie_type) - 1)]][
            random.randint(0, len(json_data[ie_type[random.randint(0, len(ie_type) - 1)]]) - 1)]

# url自动化遍历读取文件
def url_for(domain):
    sys = platform.system()
    if sys == "Windows":
        path = r"./phantomjs_windows.exe"
    elif sys == "Linux":
        path = r"./phantomjs_liunx_x64"
    else:
        return False
    try:
        driver = webdriver.PhantomJS(executable_path=path)
        driver.get(domain)
        content = driver.page_source
        if urlparse(driver.current_url).netloc != urlparse(domain).netloc:
            content = Extract_html(domain)
    except Exception as e:
        print(e)
        content = Extract_html(domain)
    url = []
    if content:
        content = BeautifulSoup(content, "html.parser")
        script = content.find_all('script')
        if script:
            try:
                for a in range(len(script)):
                    try:
                        if urlparse(domain).path:
                            new_domain = urlparse(domain).scheme + "://" + urlparse(domain).netloc + "/" + str(urlparse(domain).path).split("/")[1] + "/"
                        else:
                            new_domain = urlparse(domain).scheme + "://" + urlparse(domain).netloc + "/"
                        if script[a].get("src") != None:
                            if "http" in script[a].get("src"):
                                url.append(script[a].get("src").replace("./", "/"))
                            elif "runtime" in script[a].get("src") or "app" in script[a].get("src") or "finance" in script[a].get("src"):
                                url.append(new_domain + script[a].get("src").replace("./", "/"))
                                content = Extract_html(new_domain + "/" + script[a].get("src"))
                                if content == None:
                                    try:
                                        fname = "./js/" + urlparse(domain).netloc + "/" + urlparse(domain).netloc + "_error_url_list.txt"
                                        save_result(fname, new_domain + script[a].get("src").replace("./", "/"))
                                    except Exception as e:
                                        print("[E]Write File Failed!!%s" % e)
                                    pass
                                if content.find("static/js") != -1:
                                    content = content[content.find("static/js"):-1]
                                    content = content[:content.find(".js")]
                                    content = re.findall(r'"(chunk-.*?)":"(.*?)"', str(content))
                                    for co in range(len(content)):
                                        url.append(new_domain + "/static/js/" + content[co][0] + "." + content[co][1] + ".js")
                                else:
                                    content = content[content.find("js/"):-1]
                                    content = content[:content.find(".js")]
                                    content = re.findall(r'"(chunk-.*?)":"(.*?)"', str(content))
                                    for co in range(len(content)):
                                        url.append(new_domain + "/js/" + content[co][0] + "." + content[co][1] + ".js")
                            elif "manifest" in script[a].get("src"):
                                url.append(new_domain + "/" + script[a].get("src").replace("./", "/"))
                                content = Extract_html(new_domain + "/" + script[a].get("src"))
                                if content == None:
                                    try:
                                        fname = "./js/" + urlparse(domain).netloc + "/" + urlparse(domain).netloc + "_error_url_list.txt"
                                        save_result(fname, new_domain + "/" + script[a].get("src").replace("./", "/"))
                                    except Exception as e:
                                        print("[E]Write File Failed!!%s" % e)
                                    pass
                                content_b = re.findall(r'([0-9]+?):"(.*?)"', str(content))
                                if content_b:
                                    for co in range(len(content_b)):
                                        url.append(new_domain + "/static/js/" + content_b[co][0] + "." + content_b[co][1] + ".js")
                            else:
                                url.append(new_domain + "/" + script[a].get("src").replace("./", "/"))
                        else:
                            if str(script[a]).find("static/js") != -1:
                                content = str(script[a])
                                content = content[content.find("static/js"):-1]
                                content = content[:content.find(".js")]
                                content = re.findall(r'"(chunk-.*?)":"(.*?)"', str(content))
                                for co in range(len(content)):
                                    url.append(new_domain + "/static/js/" + content[co][0] + "." + content[co][1] + ".js")
                            elif str(script[a]).find("js/") != -1:
                                content = str(script[a])
                                content = content[content.find("js/"):-1]
                                content = content[:content.find(".js")]
                                content = re.findall(r'"(chunk-.*?)":"(.*?)"', str(content))
                                for co in range(len(content)):
                                    url.append(new_domain + "/js/" + content[co][0] + "." + content[co][1] + ".js")
                            elif str(script[a].text).find(".js") != -1:
                                content = str(script[a].text).replace(" ","").replace("\n","").replace("\"","'")
                                content = re.findall(r'src=\'(.*?)\'', content)
                                for co in range(len(content)):
                                    if urlparse(content[co]).netloc:
                                        url.append(content[co])
                                    else:
                                        url.append(new_domain + content[co][:content[co].find(".js") + 3].replace("./", ""))
                            else:
                                content = re.findall(r'([0-9]+?):"(.*?)"', str(content))
                                if content:
                                    for co in range(len(content)):
                                        url.append(new_domain + "/js/" + content[co][0] + "." + content[co][1] + ".js")
                    except Exception as e:
                        print(e)
                        pass
            except Exception as e:
                print(e)
                pass
        # 解决重复url问题
        new_url = []
        for u in range(len(url)):
            if "baidu.com" not in url[u]:
                if "sohu.com" not in url[u]:
                    url[u] = url[u].replace("///", "/")
                    if url[u].find("?") == -1:
                        new_url.append(url[u].replace("///", "/"))
                    else:
                        new_url.append(url[u][:url[u].find("?")].replace("///", "/"))
        url = list(set(new_url))
        for u in range(len(url)):
            content = Extract_html(url[u])
            fname = "./js/" + urlparse(domain).netloc + "/" + url[u].split('/')[-1]
            try:
                fp = open(fname, "at", encoding='utf-8')
                fp.write(jsbeautifier.beautify(content))
                fp.close()
            except Exception as e:
                print("[E]Write File Failed!!%s" % e)
                return False
        try:
            fname = "./js/" + urlparse(domain).netloc + "/" + urlparse(domain).netloc + "_url_list.txt"
            for u in range(len(url)):
                save_result(fname, url[u])
            return True
        except Exception as e:
            print("[E]Write File Failed!!%s" % e)
            return False
    elif content == None:
        try:
            fname = "./js/" + urlparse(domain).netloc + "/" + urlparse(domain).netloc + "_error_url_list.txt"
            save_result(fname, domain)
            return True
        except Exception as e:
            print("[E]Write File Failed!!%s" % e)
            return False

# 写入文件
def save_result(filename="", content=""):
    fp = open(filename, "at", encoding='utf-8')
    fp.write(content + "\n")
    fp.close()

# 创建文件夹
def mkdir(path):
    path = path.strip()
    path = path.rstrip("\\")
    isExists = os.path.exists(path)
    if not isExists:
        os.makedirs(path)
        print(path + ' 创建成功')
        return True
    else:
        print(path + ' 目录已存在，正在清空目录重新更新文件。。。')
        del_file(path)
        return True

# 清空文件夹内容
def del_file(path):
    ls = os.listdir(path)
    for i in ls:
        c_path = os.path.join(path, i)
        if os.path.isdir(c_path):
            del_file(c_path)
        else:
            os.remove(c_path)

if __name__ == "__main__":
    urllib3.disable_warnings()
    args = parse_args()
    if args.jsfile != None:
        eachFile(args.jsfile)
    else:
        if args.url:
            if mkdir("./js/" + urlparse(args.url).netloc + "/"):
                info = url_for(args.url)
                if info:
                    eachFile("./js/" + urlparse(args.url).netloc + "/")
        else:
            print("python webpackfind.py -u http://www.baidu.com")


