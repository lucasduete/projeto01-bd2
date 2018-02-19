let express = require('express');
let logger = require('morgan');
let bodyParser = require('body-parser');
let cors = require('cors');

let routes = require('../routes');

let api = express();

api.use(logger('dev'));

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

let router = express.Router();

routes(api);

api.use(cors(
	{
		credentials: true,
		origin: true
	}
));

/* //cors
api.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Credentials", true);
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "accept, origin, X-Requested-With, Content-Type, X-Codingpedia, Authorization");
	res.header("Access-Control-Max-Age", "172800");
	next();
});
 */
/*router.use((req, res, next) => {
	console.log("Algo acontecendo"); //Será impresso em todas as rotas
	next();
});*/

router.get('*', (req, res) => res.status(200).send({
  message: 'Projeto de Banco de dados II',
}));

api.use('/api', router); //rota raiz

module.exports = api;