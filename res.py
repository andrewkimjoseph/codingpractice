import requests

res2 = requests.get('https://sms.movesms.co.ke/api/balance?api_key=uSenxgb9xLDUy4XGWNq6hyCbIHdHFfExRovUzmxf8I8eiL0Wtu')

print(res2.text)