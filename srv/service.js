const cds = require('@sap/cds');

module.exports = cds.service.impl( async function(srv) {
    srv.on('printhelloworld', async req => {
        console.log(req.data) //print the request coming from server
    })
})