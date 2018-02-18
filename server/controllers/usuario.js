let Usuario = require('../models').Usuario;

module.exports = {
    create(req, res){
        return Usuario
            .create({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
            })
            .then(success => res.status(201).send(success))
            .catch(error => res.status(400).send(error));
    }
}