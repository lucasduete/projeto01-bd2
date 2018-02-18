let Localidade = require('../models').Localidade;

module.exports = {
    create(req, res){
        return Localidade
            .create({
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                nome: req.body.nome,
                descricao: req.body.descricao,
                nota: 0.0,
                userId: req.body.userId
            })
            .then(success => res.status(201).send(success))
            .catch(error => res.status(400).send(error));
    },

    read(req, res){
        return Localidade
            .findById(req.params.localId)
            .then(success => {
                if(!success){
                    return res.status(404).send({
                        message: 'Localidade Not Found',
                    });
                }
                return res.status(200).send(success);
            })
            .catch(error => res.status(400).send(error));
    },

    list(req, res){
        return Localidade
            .all()
            .then(success => res.status(200).send(success))
            .catch(error => res.status(400).send(error));
    }
}
