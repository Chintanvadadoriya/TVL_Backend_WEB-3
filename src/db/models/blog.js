'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Blog.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'category',
      });
    }
  }
  Blog.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      description: DataTypes.TEXT,
      highlightContent: DataTypes.TEXT,
      feature: DataTypes.TEXT,
      quote: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      featureContent: DataTypes.TEXT,
      igoFacts: DataTypes.TEXT,
      aboutIgo: DataTypes.TEXT,
      tokenName: DataTypes.STRING,
      tokenSymbol: DataTypes.STRING,
      totalSupply: DataTypes.STRING,
      hardCap: DataTypes.STRING,
      igoDate: DataTypes.STRING,
      allocation: DataTypes.STRING,
      price: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Blog',
    },
  );
  return Blog;
};
