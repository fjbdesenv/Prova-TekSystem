'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('testes', [
      {
        descricao: 'Descricao 1',
        // novo_campo: 'novo_campo 1'
      },
      {
        descricao: 'Descricao 2',
        // novo_campo: 'novo_campo 2'
      },
      {
        descricao: 'Descricao 3',
        // novo_campo: 'novo_campo 3'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
