const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
/**/const routePortfolio = require('./router/portfolioRouter');
const api = express();
const port = 3000 //porta padrão
const router = express.Router()

api.use(cors());

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

router.get('/', (req, res) => res.json({
mensagem: 'API online!' }))

api.use('/', router)
api.use('/portfolio',routePortfolio);

api.listen(port)
console.log('Run API...')
