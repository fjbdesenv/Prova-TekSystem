'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('transacao', [
      {
        valor: 1,
        sitaucao: 'A',
        date: Sequelize.fn("NOW"),
        descricao: "Descricao 1",
        categoria: 1,
        tipo_transacao: 1
      },
      {
        valor: 2,
        sitaucao: 'P',
        date: Sequelize.fn("NOW"),
        descricao: "Descricao 2",
        categoria: 2,
        tipo_transacao: 2
      },
      {
        valor: 3,
        sitaucao: 'P',
        date: Sequelize.fn("NOW"),
        descricao: "Descricao 3",
        categoria: 3,
        tipo_transacao: 3
      },
      // Erro pois não existe caregoria com codigo 4
      // {
      //   valor: 4,
      //   sitaucao: 'P',
      //   date: Sequelize.fn("NOW"),
      //   descricao: "Descricao 4",
      //   categoria: 4,
      //   tipo_transacao: 4
      // }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transacao', null, {});
  }
};
