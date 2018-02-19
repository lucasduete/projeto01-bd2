let Usuario = require('../models').Usuario;

module.exports = {
    login(req, res){
        return Usuario
            .find({
                where: {
                    email: req.headers.email,
                    senha: req.headers.senha
                }
            })
            .then(success => {
                console.log("encontrou");
                if(!success){
                    return res.satatus(404).send({
                        message: "Usuário não encontrado",
                    });
                }
                return res.status(200).send(success);
            })
            .catch(error => res.status(400).send(error));
    },

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

    /*update(req, res) {
        return Usuario
          .findById(req.params.userId)
          .then(success => {
            if (!success) {
              return res.status(404).send({
                message: 'Usuario Not Found',
              });
            }
            console.log("ENCONTROU O USUÁRIO NO BANCO DE  DADOS");
            return success
              .update({
                nome: req.body.nome || success.title,
              })
              .then(() => res.status(200).send(success))
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },

    delete(req, res){
        //codificar
    }*/
}