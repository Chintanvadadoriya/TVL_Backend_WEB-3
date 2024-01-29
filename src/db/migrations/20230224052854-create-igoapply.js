'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Igoapplies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tokenAddress: {
        type: Sequelize.STRING,
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
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      softCap: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      hardCap: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      minBuy: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      maxBuy: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      tokenAllocation: {
        type: Sequelize.FLOAT,
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
      isWhiteListVisible: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      pairCoin: {
        type: Sequelize.STRING,
      },
      raiseToken: {
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
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      // kycVerifyed: {
      // 	type: Sequelize.BOOLEAN,
      // 	defaultValue: false,
      // },
      // kycToken: {
      // 	type: Sequelize.STRING,
      // },
      verifyed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Igoapplies');
  },
};
