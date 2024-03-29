"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			models.User.hasMany(models.Igoapply, {
				foreignKey: "userId",
			});
			models.User.hasMany(models.Comment, {
				foreignKey: "userId",
				as: "user",
			});
			models.User.hasMany(models.Replay, {
				foreignKey: "userId",
				as: "replies",
			});
		}
	}
	User.init(
		{
			username: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			image: DataTypes.STRING,
			imageUrl: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	return User;
};
