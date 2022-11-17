'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      sitaucao: {
        type: Sequelize.CHAR,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Categoria',
          key: 'codigo'
        }
      },
      tipo_transacao: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
