import os

from selenium import webdriver


os.environ['PATH'] += r"C:\chromedriver_win32"

driver = webdriver.Chrome()

driver.get('https://sms.movesms.co.ke/userlogin')

driver.find_element_by_class_name("btn.btn-themebtn-block")



