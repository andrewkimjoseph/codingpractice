var qs = require("querystring");
var http = require("https");

var options = {
  "method": "POST",
  "hostname": "www.sms.movesms.co.ke/",
  "port": null,
  "path": "/API",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(qs.stringify({ userId: 'YourUsername',
  password: 'YourPassword',
  senderId: 'SMSGAT',
  sendMethod: 'simpleMsg',
  msgType: 'text',
  mobile: '254722978938, 254710123456',
  msg: 'This is my first message with SMSGateway.Center',
  duplicateCheck: 'true',
  format: 'json' }));
req.end();

