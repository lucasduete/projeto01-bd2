let userController = require('../controllers').usuario;

module.exports = (app) => {
   app.post('/api/cadastrar-user', userController.create);
};