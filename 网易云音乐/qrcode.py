"""
 author rufeng
 date 2021/11/15/20:55
 description 
"""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait

COMMON_TIME_OUT = 5

opts = webdriver.ChromeOptions()
opts.add_argument('--window-size=1920,1080')
chrome = webdriver.Chrome(options=opts)
try:
    chrome.get("https://music.163.com/")
    WebDriverWait(chrome, COMMON_TIME_OUT).until(
        EC.element_to_be_clickable((By.XPATH, '//a[@data-action="login"]'))).click()
    WebDriverWait(chrome, COMMON_TIME_OUT).until(
        EC.presence_of_element_located((By.XPATH, '//div[@class="qr"]/div[2]/canvas')))
    base64img = chrome.execute_script(
        "return document.querySelector('#login-qrcode > div > div.main.j-flag > div > div.right > div.qr > div.canvas.f-pen.j-flag > canvas').toDataURL()")
    print(base64img)
finally:
    chrome.quit()
