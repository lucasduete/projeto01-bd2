'use strict';
module.exports = (sequelize, DataTypes) => {
  var Localidade = sequelize.define('Localidade', {
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    nota: DataTypes.FLOAT
  }, {});
  Localidade.associate = function(models) {
    Localidade.belongsTo(models.Usuario, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Localidade.hasMany(models.Avaliacao, {
      foreignKey: 'localidadeId',
      as: 'avaliacoesLocalidade'
    })
  };
  return Localidade;
};