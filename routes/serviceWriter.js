const express = require('express');
const {ServiceBusClient} = require('@azure/service-bus')
const {SERVICE_BUS} = require('../config');

const router = express.Router();


router.get('/',async (req,res)=>{
    const message = [
        {
            body: { "name": "Albert Einstein", "company": "xyz"},
            contentType: "application/json"
        }
    ]
          const serviceBusClient = new ServiceBusClient(SERVICE_BUS);
          const sender = serviceBusClient.createSender('firstqueue');
          //sending a single message
          const resposne = await sender.sendMessages(message);
      res.send(resposne)
      
})

module.exports = router