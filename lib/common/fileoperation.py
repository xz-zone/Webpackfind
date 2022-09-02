#!/usr/bin/env python
# coding: utf-8

import os, json, random, jsbeautifier, yaml, re, js2py
from lib.common.regular import Regular

class FileOperation():

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
            return True
        else:
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

    # 遍历指定目录，显示目录下的所有文件名
    def eachFile(self, filepath="", type=1):
        url = []
        pathDir = os.listdir(filepath)
        for allDir in pathDir:
            if os.path.splitext(allDir)[-1] != ".txt":
                child = os.path.join('%s%s' % (filepath, allDir))
                if type == 1:
                    info = self.readFile(child)
                    if info:
                        for u in range(len(info)):
                            url.append(info[u])
                else:
                    url.append(child)
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
        data = Regular().Extract_URL(fopen.read())
        self.save_result(os.path.join(os.path.dirname(filename), "result.txt"), "【+】" + filename)
        for x in data:
            self.save_result(os.path.join(os.path.dirname(filename),"result.txt"), "      " + str(x))
            url.append(x)
        fopen.close()
        return url

    # 随机获取ua库
    def uarand(self):
        ie_type = ["chrome", "opera", "firefox", "internetexplorer", "safari"]
        with open(os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.realpath(__file__)))), 'config', 'pc_ua.json'), 'r', encoding='utf8') as fp:
            json_data = json.load(fp)
            return json_data[ie_type[random.randint(0, len(ie_type) - 1)]][random.randint(0, len(json_data[ie_type[random.randint(0, len(ie_type) - 1)]]) - 1)]

    # 读取yml规则库
    def getyml(self):
        rulesJson = []
        try:
            file = open(os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.realpath(__file__)))), 'config', 'Config.yml'), 'r', encoding="utf-8")
            file_data = file.read()
            file.close()
            data = yaml.load(file_data, Loader=yaml.FullLoader)
            rules = data.get("rules")
            # Fingerprint 指纹
            # Basic Information 基本信息
            # Maybe Vulnerability 可能是脆弱性
            # Sensitive Information 敏感信息
            # Other 另外
            for i in range(len(rules)):
                for r in range(len(rules[i]["rule"])):
                    rulesJson.append({"type_name": rules[i]["type"], "name": rules[i]["rule"][r]["name"], "regex": rules[i]["rule"][r]["regex"]})
            return rulesJson
        except:
            return rulesJson

    # 读取js文件路径
    def resolve_path(self, content=""):
        r = re.compile(r"\w\.p\+\"(.*?)\.js", re.DOTALL)
        result = r.findall(str(content))
        urllist = []
        for jsCode in result:
            if len(jsCode) < 30000:
                jsCode = "\"" + jsCode + ".js\""
                variable = re.findall(r'\[.*?\]', jsCode)
                if "[" and "]" in variable[0]:
                    variable = variable[0].replace("[", "").replace("]", "")
                jsCodeFunc = "function js_compile(%s){js_url=" % (variable) + jsCode + "\nreturn js_url}"
                pattern_jscode = re.compile(r"\(\{\}\[(.*?)\]\|\|.\)", re.DOTALL)
                flag_code = pattern_jscode.findall(jsCodeFunc)
                if flag_code:
                    jsCodeFunc = jsCodeFunc.replace("({}[%s]||%s)" % (flag_code[0], flag_code[0]), flag_code[0])
                pattern1 = re.compile(r"\{(.*?)\:")
                pattern2 = re.compile(r"\,(.*?)\:")
                nameList1 = pattern1.findall(jsCode)
                nameList2 = pattern2.findall(jsCode)
                nameList = nameList1 + nameList2
                nameList = list(set(nameList))
                Func = js2py.eval_js(jsCodeFunc)
                for name in nameList:
                    if "\"" in name:
                        name = name.replace("\"", "")
                    content = Func(name)
                    if "undefined" not in content:
                        urllist.append(content)
        return list(set(urllist))

    # 清空phantomjs日志
    def rmphantomjslog(self):
        # 清楚日志文件
        try:
            os.remove(os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.realpath(__file__)))), 'tmp', 'ghostdriver.log'))
        except Exception as e:
            pass

    # 清空日志文件
    def rmlogfile(self, filepath):
        pathDir = os.listdir(filepath)
        for allDir in pathDir:
            if allDir.endswith(".txt"):
                try:
                    os.remove(os.path.join(filepath, allDir))
                except Exception as e:
                    pass