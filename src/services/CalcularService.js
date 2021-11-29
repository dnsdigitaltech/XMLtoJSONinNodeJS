var soap = require('soap');
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';
module.exports = {
    calcular: (intA, intB) => {
        return new Promise((aceito, rejeitado) => {

            soap.createClient(url, function(error, client) {
                let args = { intA: intA, intB: intB };
                client.Divide(args, function(error, result) {
                    if(error) {rejeitado(error); return;}
                    aceito(result);
                });
            });
        });
    }
};