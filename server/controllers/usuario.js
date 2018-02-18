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
    },

    read(req, res){
        return Usuario
            .findById(req.params.userId)
            .then(success => {
                if(!success){
                    return res.status(404).send({
                        message: 'Usuario Not Found',
                    });
                }
                return res.status(200).send(success);
            })
            .catch(error => res.status(400).send(error));
    },

    update(req, res){
        return Usuario
            .findById(req.params.userId)
            .then(success => {
                if(!success){
                    return res.status(404).send({
                        message: 'Usuario Not Found',
                    });
                }
                return success
                    .update({
                        nome: req.body.nome || success.nome,
                        email: req.body.email || success.email,
                        senha: req.body.senha || success.senha
                    })
                    .then(() => res.status(200).send(success))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    delete(req, res){
        //codificar
    }
}