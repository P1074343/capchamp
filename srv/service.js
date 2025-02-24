const cds = require('@sap/cds');

module.exports = cds.service.impl( async function(srv) {
    srv.on('printhelloworld', async req => {
        console.log(req.data.input) //print the request coming from server
        return `${req.data.input} World!`
    })

    srv.on('addition', async req => {
        console.log(req.data)
        let result = req.data.num1 + req.data.num2;   
        return result;
    })

    srv.on('MyFunction', async req => {
        let result = {};
        if(req.data.category == 1) {
            result.product = 'BMW',
            result.price = "USD 1200",
            result.location = 'Germany'
        } else {
            result.product = 'Audi',
            result.stock = 120,
            result.priceArray = [
                {
                    "Price": 47567,
                    "Currency": "EUR",
                    "Discount": "20 %"
                }
            ]
        }console.log(result);
        return result;
    })
})