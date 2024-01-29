'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      highlightContent: {
        type: Sequelize.TEXT,
      },
      feature: {
        type: Sequelize.TEXT,
      },
      quote: {
        type: Sequelize.STRING,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      featureContent: {
        type: Sequelize.TEXT,
      },

      igoFacts: {
        type: Sequelize.TEXT,
      },
      aboutIgo: {
        type: Sequelize.TEXT,
      },
      tokenName: {
        type: Sequelize.STRING,
      },
      tokenSymbol: {
        type: Sequelize.STRING,
      },
      totalSupply: {
        type: Sequelize.STRING,
      },
      hardCap: {
        type: Sequelize.STRING,
      },
      igoDate: {
        type: Sequelize.STRING,
      },
      allocation: {
        type: Sequelize.STRING,
      },
      price: {
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
    await queryInterface.dropTable('Blogs');
  },
};
