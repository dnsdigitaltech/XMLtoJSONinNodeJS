var request = require('request');
let xml =
`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:qtre="http://Main.Service">
   <soapenv:Header/>
   <soap:Body>
    <listarMunicipio xmlns="http://www.detran.rj.gov.br">
      <NomeCidadao>string</NomeCidadao>
      <NomeSocial>string</NomeSocial>
      <NomePai>string</NomePai>
      <NomeMae>string</NomeMae>
      <DataNascimento>string</DataNascimento>
      <Rg>string</Rg>
      <carteira>string</carteira>
    </listarMunicipio>
  </soap:Body>
</soapenv:Envelope>`

var options = {
  url: 'http://10.200.96.175:8180/ServicosAgendamentoDIC.asmx?WSDL',
  method: 'POST',
  body: xml,
  headers: {
    'Content-Type':'text/xml;charset=utf-8',
    'Accept-Encoding': 'gzip,deflate',
    'Content-Length':'length',
    'SOAPAction':"http://www.detran.rj.gov.br/listarMunicipio"
  }
};
console.log(options);
let callback = (error, response, body) => {
  if (!error && response.statusCode == 200) {
    console.log('Raw result', body);
    var xml2js = require('xml2js');
    var parser = new xml2js.Parser({explicitArray: false, trim: true});
    parser.parseString(body, (err, result) => {
      console.log('JSON result', result);
    });
  };
  console.log('E', response.statusCode, response.statusMessage);  
};
request(options, callback);