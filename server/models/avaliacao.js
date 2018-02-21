'use strict';
module.exports = (sequelize, DataTypes) => {
  var Avaliacao = sequelize.define('Avaliacao', {
    nota: DataTypes.FLOAT,
    comentario: DataTypes.STRING
  }, {});
  Avaliacao.associate = function(models) {
    Avaliacao.belongsTo(models.Usuario, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Avaliacao.belongsTo(models.Localidade, {
      foreignKey: 'localidadeId',
      onDelete: 'CASCADE'
    });
  };
  return Avaliacao;
};