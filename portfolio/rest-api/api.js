const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = express(); //chamando o objeto express
const port = 3000;
const router = express.Router();
const portfolioRouter = require('./router/portfolioRouter');

api.use(cors()); // Assim ele vai atender requisições que venham de conexões diferentes e domínios diferentes

//Recuperar o corpo das requisições

api.use(bodyParser.urlencoded({extended: true}));

api.use(bodyParser.json());

router.get("/", (req, resp) => resp.json({
    mensagem: "API está online"
}));

api.use('/', router);
api.use('/portfolio', portfolioRouter);
api.listen(3000);

console.log("API ESTÁ FUNCIONANDO");

