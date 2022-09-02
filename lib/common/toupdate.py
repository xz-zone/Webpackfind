#!/usr/bin/env python
# coding: utf-8

import os, requests
from tqdm import *

class ToUpdate():

    # 检查版本更新
    def get_version(self):
        path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'version.txt')
        if os.path.exists(path):
            try:
                with open(path, "rt", encoding="UTF-8") as f:
                    now_version = f.read().strip()
                print("目前版本: \n{}\n".format(now_version))
                version_url = "https://raw.githubusercontent.com/xz-zone/Webpackfind/master/version.txt"
                res = requests.get(url=version_url, headers={"User-Agent": File.uarand()}, timeout=10, verify=False)
                if res.status_code == 200:
                    new_version = res.text.strip()
                    if now_version == new_version:
                        tqdm.write("目前版本最新")
                    else:
                        add_version = str(str(new_version.replace("\r", "").replace("\n", "")).replace(str(now_version.replace("\n", "")), "")).replace("。", "。\n")
                        if add_version:
                            print("目前版本最新")
                            print("更新内容如下:\n{}".format(add_version))
                        print("目前版本非最新，建议及时更新...\n地址: https://github.com/xz-zone/Webpackfind/\n")
                else:
                    print("获取版本信息失败...")
            except Exception as e:
                print("获取版本信息失败...")
        else:
            print("目前版本非最新，建议及时更新...\n地址: https://github.com/xz-zone/Webpackfind/")