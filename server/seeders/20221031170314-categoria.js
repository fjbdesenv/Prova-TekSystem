'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categoria', [
      {
        descricao: 'Categoria 1',
        tipo_categoria: 1
      },
      {
        descricao: 'Categoria 2',
        tipo_categoria: 2
      },
      {
        descricao: 'Categoria 3',
        tipo_categoria: 3
      }
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categoria', null, {});
  }
};
