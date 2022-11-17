'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transacao.hasOne(models.Categoria ,{
        foreignKey: 'codigo'
      });
    }
  }
  Transacao.init({
    codigo: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    valor: DataTypes.FLOAT,
    situacao: DataTypes.CHAR,
    date: DataTypes.DATE,
    descricao: DataTypes.STRING,
    categoria: DataTypes.INTEGER,
    tipo_transacao: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transacao',
  });
  return Transacao;
};