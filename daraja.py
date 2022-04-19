import requests

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer GBTYX8A3NG7M6a32iRRGwmcWJpEX'
}

payload = {
    "BusinessShortCode": 174379,
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjIwNDA0MTMwMjAy",
    "Timestamp": "20220404130202",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": 100,
    "PartyA": 254708374149,
    #"PartyB": 174379,
    "PhoneNumber": 254722978938,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "CompanyXLTD",
    "TransactionDesc": "Payment of X" 
  }

response = requests.request("POST", 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', headers = headers, data = payload)
print(response.text.encode('utf8'))


{
  "MerchantRequestID": "120689-141869949-1",
  "CheckoutRequestID": "ws_CO_040420221257045602",
  "ResponseCode": "0",
  "ResponseDescription": "Success. Request accepted for processing",
  "CustomerMessage": "Success. Request accepted for processing"
}