'use strict';
module.exports = (sequelize, DataTypes) => {
  let Usuario = sequelize.define('Usuario', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {});
  Usuario.associate = function(models) {
    Usuario.hasMany(models.Localidade, {
      foreignKey: 'userId',
      as: 'localidadesUser'
    });
    Usuario.hasMany(models.Avaliacao, {
      foreignKey: 'userId',
      as: 'avaliacoesUser'
    });
  };
  return Usuario;
};