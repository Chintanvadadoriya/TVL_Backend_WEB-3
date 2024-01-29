'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pairs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pairs.init(
    {
      token0: DataTypes.STRING,
      token1: DataTypes.STRING,
      chainId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Pairs',
    },
  );
  return Pairs;
};
