const { DataTypes } = require("sequelize");
const sequelize = require("../../../Config/sequelizeConnect");

const UserProfile = sequelize.define(
  "UserProfile",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.TEXT,
    },
    avatar: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "user_profiles",
    timestamps: true,
    underscored: true,
  }
);

module.exports = UserProfile;
