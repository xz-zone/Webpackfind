#!/usr/bin/env python
# coding: utf-8
import logging, time, os

class Printlog():
    def __init__(self, path="", logger=None):
        self.logger = logging.getLogger(logger)
        self.logger.setLevel(logging.NOTSET)
        self.log_time = time.strftime("%Y-%m-%d %H:%M:%S")
        self.path = path

    def info(self, message):
        self.fontColor('\033[0;34m%s\033[0m')
        self.logger.info(message)

    def set_logger(self):
        if not self.logger.handlers:
            self.fh = logging.FileHandler(os.path.join(self.path, "run_log.txt"), "w", encoding="utf-8")
            self.fh.setLevel(logging.DEBUG)
            self.chd = logging.StreamHandler()
            self.chd.setLevel(logging.INFO)
            self.formatter = logging.Formatter("[%(levelname)s] %(asctime)s %(filename)s -> %(funcName)s line:%(lineno)d: %(message)s\n")
            self.formatter_info = logging.Formatter()
            self.chd.setFormatter(self.formatter_info)
            self.fh.setFormatter(self.formatter)
            self.logger.addHandler(self.fh)
            self.logger.addHandler(self.chd)

    def get_logger(self):
        Printlog.set_logger(self)
        return self.logger

    def remove_log_handler(self):
        self.logger.removeHandler(self.fh)
        self.logger.removeHandler(self.chd)
        self.fh.close()
        self.chd.close()
