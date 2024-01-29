'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Staking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Staking.init(
    {
      pid: DataTypes.STRING,
      stakingToken: DataTypes.STRING,
      stakingSymbol: DataTypes.STRING,
      stakingLogo: DataTypes.STRING,
      rewardToken: DataTypes.STRING,
      rewardSymbol: DataTypes.STRING,
      rewardLogo: DataTypes.STRING,
      blockchainPlateform: DataTypes.STRING,
      endDate: DataTypes.STRING,
      infoUrl: DataTypes.STRING,
      buyUrl: DataTypes.STRING,
      rewardRate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Staking',
    },
  );
  return Staking;
};
