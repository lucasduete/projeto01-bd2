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
            .find(
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

    list(req, res){
        return Avaliacao
            .all()
            .then(success => res.status(200).send(success))
            .catch(error => res.status(400).send(error));
    }
}
