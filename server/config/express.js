let express = require('express');
let logger = require('morgan');
let bodyParser = require('body-parser');
let cors = require('cors');
let helmet = require('helmet');

let api = express();

api.use(cors({
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));
api.use(logger('dev'));
api.use(helmet());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

let routes = require('../routes');
routes(api);

let router = express.Router;
api.use('/api', router); //rota raiz


/*router.use((req, res, next) => {
	console.log("Algo acontecendo"); //Será impresso em todas as rotas
	next();
});*/

module.exports = api;