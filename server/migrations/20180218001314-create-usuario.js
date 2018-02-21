'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        validate: {
          notEmpty: true
        },
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true
        },
        type: Sequelize.STRING
      },
      senha: {
        allowNull: false,
        validate: {
          notEmpty: true
        },
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Usuarios');
  }
};