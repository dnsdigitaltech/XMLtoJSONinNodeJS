const CalcularService = require('../services/CalcularService');

module.exports = {    
    calcular: async(req, res) => {
        let json = {error:'', result:[]};

        let intA = req.body.intA;
        let intB = req.body.intB;

        if(intA && intB){
            let CalcularResult = await CalcularService.calcular(intA, intB);
            json.result = {
                CalcularResult,
                intA,
                intB
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    }
};