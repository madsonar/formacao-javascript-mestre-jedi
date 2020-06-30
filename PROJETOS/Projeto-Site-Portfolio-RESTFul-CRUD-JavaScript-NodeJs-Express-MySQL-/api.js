const express  = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const api = express();
const port = 3000;
const router = express.Router();


api.use(cors());

api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json());

router.get("/",(req, res) => res.json({

    mensagem: 'API está online'

}));

api.use('/', router);

api.listen(port);

console.log("RUN API");
