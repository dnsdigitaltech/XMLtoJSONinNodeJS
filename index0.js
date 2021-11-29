var soap = require('soap');
var express = require('express');
var app = express();

var url = 'http://www.dneonline.com/calculator.asmx?WSDL';
soap.createClient(url, function(err, client) {
    let args = { intA: "20", intB: "5" };
    client.Divide(args, function(err, result) {
        if(err) return console.log(err);
        console.log(result);
    });
});



