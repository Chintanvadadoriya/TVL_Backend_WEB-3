'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Ido.init(
    {
      idoAddress: DataTypes.STRING,
      tokenAddress: DataTypes.STRING,
      decimal: DataTypes.INTEGER,
      ownerAddress: DataTypes.STRING,
      projectCover: DataTypes.STRING,
      coverImage: DataTypes.STRING,
      projectName: DataTypes.STRING,
      symbol: DataTypes.STRING,
      description: DataTypes.STRING,
      websiteUrl: DataTypes.STRING,
      whitePaperUrlPdf: DataTypes.STRING,
      blockchainPlateform: DataTypes.STRING,
      tokenRate: DataTypes.STRING,
      softCap: DataTypes.STRING,
      hardCap: DataTypes.STRING,
      minBuy: DataTypes.STRING,
      maxBuy: DataTypes.STRING,
      tokenAllocation: DataTypes.STRING,
      idoStartDate: DataTypes.STRING,
      idoEndDate: DataTypes.STRING,
      whiteList: DataTypes.BOOLEAN,
      telegramUrl: DataTypes.STRING,
      twitterUrl: DataTypes.STRING,
      discordUrl: DataTypes.STRING,
      other: DataTypes.STRING,
      created: DataTypes.STRING,
      pairCoin: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Ido',
    },
  );
  return Ido;
};
