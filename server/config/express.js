let express = require('express');
let logger = require('morgan');
let bodyParser = require('body-parser');

let routes = require('../routes');

let api = express();

api.use(logger('dev'));

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));

let router = express.Router();

routes(api);

router.use((req, res, next) => {
	console.log("Algo acontecendo"); //Será impresso em todas as rotas
	next();
});

router.get('*', (req, res) => res.status(200).send({
  message: 'Projeto de Banco de dados II',
}));

api.use('/api', router); //rota raiz

module.exports = api;