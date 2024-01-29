'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stakings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pid: {
        type: Sequelize.STRING,
      },
      stakingToken: {
        type: Sequelize.STRING,
      },
      stakingSymbol: {
        type: Sequelize.STRING,
      },
      stakingLogo: {
        type: Sequelize.STRING,
      },
      rewardToken: {
        type: Sequelize.STRING,
      },
      rewardSymbol: {
        type: Sequelize.STRING,
      },
      rewardLogo: {
        type: Sequelize.STRING,
      },
      blockchainPlateform: {
        type: Sequelize.STRING,
      },
      endDate: {
        type: Sequelize.STRING,
      },
      infoUrl: {
        type: Sequelize.STRING,
      },
      buyUrl: {
        type: Sequelize.STRING,
      },
      rewardRate: {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Stakings');
  },
};
