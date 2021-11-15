"""
 author rufeng
 date 2021/11/12/18:27
 description 
"""
import os
import subprocess
import time

os.environ.setdefault("crackLoginServerPort", "5000")
p = subprocess.run("node -v", stdout=subprocess.PIPE)
print(f"系统node版本为：{p.stdout.decode()}")
# p = subprocess.Popen("node server.js")
# print("sdfadf")
# time.sleep(100)
# p.kill()
# print("dddd")
for k, v in os.environ.items():
    print(k, v)
