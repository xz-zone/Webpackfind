#!/usr/bin/env python
# coding: utf-8

import requests, chardet, platform, os
from urllib.parse import urlparse
from lib.common.fileoperation import FileOperation
from tqdm import *
from selenium import webdriver
from selenium.webdriver import DesiredCapabilities
from requests.packages import urllib3
from requests.packages.urllib3.exceptions import InsecureRequestWarning
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)

class UrlRequest():

    def __init__(self, cookie):
        urllib3.disable_warnings()
        self.cookie = cookie

    # 提取页面源码，返回值为页面源码
    def Extract_html(self, url):
        header = {"User-Agent": FileOperation().uarand(), "Cookie": self.cookie}
        try:
            re = requests.get(url, headers=header, timeout=10, verify=False, allow_redirects=False)
            if re.status_code == 200:
                cont = re.content
                charset = chardet.detect(cont)['encoding']
                raw = cont.decode(charset)
                return raw
            else:
                return None
        except Exception as e:
            return None

    # 自动选择协议头
    def Auto_select_protocol(self, url):
        try:
            scheme = urlparse(url).scheme
            # 自动判断url地址是否添加http/https协议
            if "http" in scheme or "https" in scheme:
                return url
            else:
                if self.Extract_html("http://" + url) == None:
                    if self.Extract_html("https://" + url) == None:
                        tqdm.write("【扫描失败】：{}\n".format(str(url)))
                        return False
                    else:
                        url = "https://" + url
                else:
                    url = "http://" + url
                return url
        except Exception as e:
            return False

    # 调用phantomjs模仿浏览器请求
    def phantomjs_requests(self, url):
        content = ""
        js_array = []
        sys = platform.system()
        if sys == "Windows":
            jspath = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.realpath(__file__)))), 'config', 'phantomjs_windows.exe')
        elif sys == "Linux":
            jspath = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.realpath(__file__)))), 'config', 'phantomjs_liunx_x64')
        else:
            return False
        try:
            desired_capabilities = DesiredCapabilities.PHANTOMJS.copy()
            ua = FileOperation().uarand()
            desired_capabilities["phantomjs.page.settings.userAgent"] = ua
            desired_capabilities["phantomjs.page.customHeaders.User-Agent"] = ua
            desired_capabilities["phantomjs.page.settings.resourceTimeout"] = True
            desired_capabilities["phantomjs.page.settings.disk-cache"] = True
            desired_capabilities["phantomjs.page.settings.loadImages"] = False
            desired_capabilities["phantomjs.page.customHeaders.Cookie"] = self.cookie
            driver = webdriver.PhantomJS(executable_path=jspath, desired_capabilities=desired_capabilities, service_args=['--ignore-ssl-errors=true'], service_log_path=os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.realpath(__file__)))), 'tmp', 'ghostdriver.log'))
            driver.set_page_load_timeout(10)
            driver.set_script_timeout(5)
            driver.get(url)
            content = driver.page_source
            if urlparse(driver.current_url).netloc != urlparse(url).netloc:
                content = self.Extract_html(url)
            else:
                # 解决layui模块加载问题
                js = """
                    var jspath = []
                    for(var i=0;i<=document.scripts.length;i++){
                        try {
                            if(document.scripts[i].src != ""){
                                jspath.push(document.scripts[i].src)
                            }
                        } catch(err){
                            break;
                        }
                    }
                    return jspath
                """
                js_array = driver.execute_script(js)
                return content, js_array
        except Exception as e:
            content = self.Extract_html(url)
        return content, js_array