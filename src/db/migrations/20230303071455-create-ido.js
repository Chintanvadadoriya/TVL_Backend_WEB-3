'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Idos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idoAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tokenAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      decimal: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ownerAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      projectCover: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      coverImage: {
        type: Sequelize.STRING,
      },
      projectName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      symbol: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      websiteUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      whitePaperUrlPdf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      blockchainPlateform: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tokenRate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      softCap: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hardCap: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      minBuy: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      maxBuy: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tokenAllocation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idoStartDate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idoEndDate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      whiteList: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      pairCoin: {
        type: Sequelize.STRING,
      },
      telegramUrl: {
        type: Sequelize.STRING,
      },
      twitterUrl: {
        type: Sequelize.STRING,
      },
      discordUrl: {
        type: Sequelize.STRING,
      },
      other: {
        type: Sequelize.STRING,
      },
      created: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      created: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Idos');
  },
};
