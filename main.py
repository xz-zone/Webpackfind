#!/usr/bin/env python
# coding: utf-8

from lib.common.cmdline import CommandLines
from lib.Controller import Controller

class webpackfind():
    def __init__(self, options):
        self.options = options

    def start(self):
        t = Controller(self.options)
        t.start()

if __name__ == '__main__':
    cmd = CommandLines().cmd()
    webpackfind(cmd).start()