# Webpack-信息收集工具

郑重声明：文中所涉及的技术、思路和工具仅供以安全为目的的学习交流使用，任何人不得将其用于非法用途以及盈利等目的，否则后果自行承担。

## 0x01 介绍

作者：[小洲](https://github.com/xz-zone)

团队：[横戈安全团队](imgs/logo.jpg)，未来一段时间将陆续开源工具，欢迎关注微信公众号：

![logo](imgs/logo.jpg)

定位：协助红队人员快速的信息收集，测绘目标资产，寻找薄弱点。

语言：python3开发

功能：一条龙服务，只需要输入根域名即可一键化收集敏感信息。具体案例见下文。


## 0x02 安装

为了避免踩坑,建议安装在如下环境中

* 当前用户对该目录有写权限，不然扫描结果无法生成。root权限即可
* Python环境必须是3.7以上，因为使用了异步。建议VPS环境是ubuntu20，默认是python3.8。安装模块的时候切记不要走豆瓣的源

```
chmod 777 build.sh
./build.sh
```
![three](imgs/three.png)

`python3 webpackfind.py -h`

![help](imgs/help.png)

## 0x03 效果展示

自动爬取网站
![one](imgs/one.png)

自动爬取本地文件
![two](imgs/two.png)

## 0x04 使用方法 

| 语法                                                       | 功能                                          |
| :------------------------------------------------------- | :-------------------------------------------- |
| python3 webpackfinder.py -u domain.com            	   	| 采集域名中的webpack                           |
| python3 webpackfinder.py -j ./js                   	| 本地读取js信息收集                            |



