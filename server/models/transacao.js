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
      Transacao.hasOne(models.Categoria,{
        foreignKey: 'codigo'
      });
    }
  }
  Transacao.init({
    codigo:{
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    valor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    situacao: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tipo_transacao:{
      type:  DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Transacao',
    tableName: 'transacaos',
  });
  return Transacao;
};