let userController = require('../controllers').usuario;
let localidadeController = require('../controllers').localidade;
let avaliacaoController = require('../controllers').avaliacao;

module.exports = (api) => {
   api.get('/api/login', userController.login);
   api.post('/api/user/cadastro', userController.create);
   api.get('/api/user/:userId', userController.read);
   //api.patch('api/user/alterar-dados/:userId', userController.update);

   api.post('/api/localidade/cadastrar', localidadeController.create);
   api.get('/api/localidade/:localId', localidadeController.read);
   api.get('/api/localidades', localidadeController.list);

   api.post('/api/avaliacao/avaliar', avaliacaoController.create);
   api.get('/api/avaliacao/:avaliacaoId', avaliacaoController.read);
   api.get('/api/avaliacoes', avaliacaoController.list);
   api.get('/api/avaliacoes/localidade/:localId', avaliacaoController.readByLocalidade);
   api.put('/api/avaliacao/editar/:avaliacaoId', avaliacaoController.update);
};