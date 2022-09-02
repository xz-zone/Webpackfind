#!/usr/bin/env python
# coding: utf-8
import os
from tqdm import *
from lib.common.utils import Utils
from lib.WebpackFind import webpackfind_class
from lib.common.toupdate import ToUpdate
from lib.common.cmdline import CommandLines
from lib.common.fileoperation import FileOperation
from queue import Queue
from tqdm import *

class Controller():

    def __init__(self, options):
        self.options = options

    def start(self):
        # 判断cookie是否为空
        if self.options.cookies == None:
            self.options.cookies = ""

        # 声明全局uuid
        uuid = Utils().random_uuid() + "/"

        if self.options.update != 0:
            # 检查更新
            ToUpdate().get_version()

        elif self.options.jsfile != None:

            webpackfind_class([], self.options.cookies, uuid).jsfile_main(self.options.jsfile)

        elif self.options.urlfile != None:

            pbar = tqdm(total=1, position=0, desc="完成进度")

            webpackfind_class([], self.options.cookies, uuid, pbar).main(self.options.urlfile)

            pbar.close()

        elif self.options.file != None:

            try:
                # 声明多线程队列
                urllist = Queue(-1)
                file = open(str(self.options.file), 'r', encoding='utf-8')
                filelist = file.readlines()
                for i in range(len(filelist)):
                    urllist.put([filelist[i].strip(), len(filelist)])

                pbar = tqdm(total=len(filelist), position=0, desc="完成进度")
                threads = []
                for num in range(1, len(filelist) + 1):
                    t = webpackfind_class(urllist, self.options.cookies, uuid, pbar)
                    threads.append(t)
                    t.start()

                for t in threads:
                    t.join()

                pbar.close()

            except Exception as e:
                tqdm.write(CommandLines().help())
        else:
            tqdm.write(CommandLines().help())

        # 清空phantomjs日志
        FileOperation().rmphantomjslog()
