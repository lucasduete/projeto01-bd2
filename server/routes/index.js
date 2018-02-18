let userController = require('../controllers').usuario;

module.exports = (api) => {
   api.post('/api/user/cadastro', userController.create);
   api.get('/api/user/:userId', userController.read);
   api.put('api/user/alterar-dados/:userId', userController.update);
};