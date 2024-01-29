'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Whitelist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Whitelist.init(
    {
      idoId: DataTypes.INTEGER,
      address: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Whitelist',
    },
  );
  return Whitelist;
};
