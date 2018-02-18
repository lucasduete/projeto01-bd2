'use strict';
module.exports = (sequelize, DataTypes) => {
  var Avaliacao = sequelize.define('Avaliacao', {
    nota: DataTypes.FLOAT,
    comentario: DataTypes.STRING
  }, {});
  Avaliacao.associate = function(models) {
    // associations can be defined here
  };
  return Avaliacao;
};