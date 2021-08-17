#!/bin/bash
apt install libfontconfig1
apt install python3 -y
apt install python3-pip --fix-missing -y
apt install python3-setuptools -y
python3 -m pip install --upgrade pip
python3 -m pip install -r requirements.txt