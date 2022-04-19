let unirest = require('unirest');
let req = unirest('POST', 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest')

req.headers({
	'Content-Type': 'application/json',
	'Authorization': 'Bearer nzsuAdkGTnn05aneLwJNYhYbZd0h'
})

req.send(JSON.stringify({
    "BusinessShortCode": 174379,
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjIwNDA0MTkyNTQ0",
    "Timestamp": "20220404192544",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": 100,
    "PartyA": 254708374149,
    "PartyB": 174379,
    "PhoneNumber": 254729887390,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "EASTER IN AFRICA",
    "TransactionDesc": "EASTER IN AFRICA" 
  }))

req.end (res => {
	if (res.error) {throw new Error(res.error);
	console.log(res.raw_body);}
});