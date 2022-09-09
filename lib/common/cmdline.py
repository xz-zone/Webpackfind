# !/usr/bin/env python3
# -*- encoding: utf-8 -*-

import argparse

class CommandLines():

    # 参数输入
    def cmd(self):
        parser = argparse.ArgumentParser(description=self.help(), add_help=False)
        parser.add_argument("-u", "--urlfile", help="自动化遍历URL中里面js")
        parser.add_argument("-j", "--jsfile", help="遍历本地目录中的js文件并且格式化js文件、提取信息泄露")
        parser.add_argument("-f", "--file", help="读取本地url文件批量遍历url中js")
        parser.add_argument("-c", "--cookies", help="设置自定义Cookie，场景:需要登录才能爬取js信息")
        parser.add_argument("-d", "--headers", help="设置自定义headers")
        parser.add_argument("-update", "--update", type=int, default=0, help="检查版本更新")
        return parser.parse_args()

    # 帮助文档输出
    def help(self):
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
            
            设置自定义headers
            python3 webpackfind.py -d "Authorization: bearer 123456\nContent-Type: application/json\n" -u http://domain.com

            检查本地`webpackfind.py`是否与github.com是否一致
            python3 webpackfind.py -update 1
             '''