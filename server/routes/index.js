let userController = require('../controllers').usuario;
let localidadeController = require('../controllers').localidade;

module.exports = (api) => {
   api.post('/api/user/cadastro', userController.create);
   api.get('/api/user/:userId', userController.read);
   //api.patch('api/user/alterar-dados/:userId', userController.update);

   api.post('/api/localidade/cadastrar', localidadeController.create);
   api.get('/api/localidade/:localId', localidadeController.read);
};