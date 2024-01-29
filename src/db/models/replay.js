"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Replay extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Replay.belongsTo(models.Comment, {
				foreignKey: "commentId",
			});
			models.Replay.belongsTo(models.User, {
				foreignKey: "userId",
				as: "user",
			});
		}
	}
	Replay.init(
		{
			replay: DataTypes.STRING,
			commentId: DataTypes.INTEGER,
			userId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Replay",
		}
	);
	return Replay;
};
