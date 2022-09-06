#!/usr/bin/env python
# coding: utf-8

import time
from prettytable import PrettyTable
from uuid import uuid4
from urllib.parse import urlparse

class Utils():

    def __init__(self):
        self.White = ["w3.org", "example.com", "purl.org", "microsoft.com", "openxmlformats.org", "purl.oclc.org", "docs.oasis-open.org", "openoffice.org", "raphaeljs.com", "bing.com", "wallstreetcn.com", "mozilla.org", "mozilla.org"]

    # 使用set对列表去重，并保持列表原来顺序
    def unique(self, arr):
        arr1 = list(set(arr))
        arr1.sort(key=arr.index)
        return arr1

    # 白名单判断是否过滤那个域名
    def White_list_domain(self, domain=""):
        for t in range(len(self.White)):
            if self.White[t] in domain:
                return False
        return True

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

    # 随机生成uuid
    def random_uuid(self):
        # 声明全局uuid
        return str(uuid4()).split('-')[-1]

    # 表格输出
    def gettable(self, field_names=[], title="", array=[], path=""):
        if len(array) != 0:
            tb = PrettyTable(align="l", header=True, padding_width=5, field_names=field_names, title=title)
            count = 0
            for i in range(len(array)):
                count = count + 1
                tb.add_row(array[i])

            if path != "":
                self.save_result(path, tb.get_string())

    # 写入文件
    def save_result(self, filename="", content="", jurisdiction="at"):
        fp = open(filename, jurisdiction, encoding='utf-8')
        fp.write(content + "\n")
        fp.close()

    # 时间输出
    def tellTime(self):
        localtime = "[" + str(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time()))) + "] "
        return localtime

    # 判断数组中是否存在某个值
    def is_array_value(self, array=[], value=""):
        if value == "":
            return False
        for t in range(len(array)):
            if array[t] in value:
                return False
        return True

    # 获取文件名
    def get_filename(url_str):
        url = urlparse(url_str)
        i = len(url.path) - 1
        while i > 0:
            if url.path[i] == '/':
                break
            i = i - 1
        filename = url.path[i+1:len(url.path)]
        if not filename.strip():
            return False
        return filename