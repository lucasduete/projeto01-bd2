let Avaliacao = require('../models').Avaliacao;

module.exports = {
    create(req, res){
        return Avaliacao
            .create({
                nota: req.body.nota,
                comentario: req.body.comentario,
                userId: req.body.userId,
                localidadeId: req.body.localidadeId
            })
            .then(success => res.status(201).send(success))
            .catch(error => res.status(400).send(error));
    },

    read(req, res){
        return Avaliacao
            .findById(req.params.avaliacaoId)
            .then(success => {
                if(!success){
                    return res.status(404).send({
                        message: 'Avaliacao Not Found',
                    });
                }
                return res.status(200).send(success);
            })
            .catch(error => res.status(400).send(error));
    },

    readByLocalidade(req, res){
        return Avaliacao
            .findAll(
                {
                    where: {
                        localidadeId: req.params.localId
                    }
                }
            )
            .then(success => {
                if(!success){
                    return res.satatus(404).send({
                        message: "Sem avaliações para esta localidade",
                    });
                }
                return res.status(200).send(success);
            })
            .catch(error => res.status(400).send(error));
    },

    readMediaByLocalidade(req, res){
        return Avaliacao
        .findAll(
            {
                attributes: ['nota'],
                where: {
                    localidadeId: req.params.localId
                }
            }
        )
        .then(success => {
            if(!success){
                return res.satatus(404).send({
                    message: "Sem avaliações para esta localidade",
                });
            }
            let soma = 0;
            let quantidade = success.length;
            success.forEach(element => {
                soma = soma + Number(element.dataValues.nota);
            });
            let media = soma / quantidade;
            return res.status(200).send({media});
        })
        .catch(error => res.status(400).send(error));
    },

    list(req, res){
        return Avaliacao
            .all()
            .then(success => res.status(200).send(success))
            .catch(error => res.status(400).send(error));
    },

    update(req, res){
        return Avaliacao
            .findById(req.params.avaliacaoId)
            .then(success => {
                if(!success){
                    return res.status(404).send({
                        message: 'Avaliacao Not Found',
                    });
                }
                return success
                    .update({
                        nota: req.body.nota || success.nota,
                        comentario: req.body.comentario || success.comentario,
                        userId: req.body.userId || success.userId,
                        localidadeId: req.body.localidadeId || success.localidadeId
                    })
                    .then(() => res.status(200).send(success))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
}
