'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Igoapply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Igoapply.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  Igoapply.init(
    {
      tokenAddress: DataTypes.STRING,
      ownerAddress: DataTypes.STRING,
      projectCover: DataTypes.STRING,
      projectName: DataTypes.STRING,
      symbol: DataTypes.STRING,
      description: DataTypes.STRING,
      websiteUrl: DataTypes.STRING,
      whitePaperUrlPdf: DataTypes.STRING,
      blockchainPlateform: DataTypes.STRING,
      tokenRate: DataTypes.INTEGER,
      softCap: DataTypes.INTEGER,
      hardCap: DataTypes.INTEGER,
      minBuy: DataTypes.INTEGER,
      maxBuy: DataTypes.INTEGER,
      tokenAllocation: DataTypes.FLOAT,
      idoStartDate: DataTypes.STRING,
      idoEndDate: DataTypes.STRING,
      whiteList: DataTypes.BOOLEAN,
      isWhiteListVisible: DataTypes.BOOLEAN,
      telegramUrl: DataTypes.STRING,
      twitterUrl: DataTypes.STRING,
      discordUrl: DataTypes.STRING,
      other: DataTypes.STRING,
      created: DataTypes.BOOLEAN,
      coverImage: DataTypes.STRING,
      // kycVerifyed: DataTypes.BOOLEAN,
      // kycToken: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      verifyed: DataTypes.BOOLEAN,
      pairCoin: DataTypes.STRING,
      raiseToken: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Igoapply',
    },
  );
  return Igoapply;
};
