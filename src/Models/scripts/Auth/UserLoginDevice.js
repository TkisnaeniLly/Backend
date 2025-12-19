const { DataTypes } = require("sequelize");
const sequelize = require("../../../Config/sequelizeConnect");

const UserLoginDevice = sequelize.define(
  "UserLoginDevice",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    device_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    device_name: {
      type: DataTypes.STRING,
    },
    ip_address: {
      type: DataTypes.STRING,
    },
    user_agent: {
      type: DataTypes.TEXT,
    },
    browser: {
      type: DataTypes.STRING,
    },
    os: {
      type: DataTypes.STRING,
    },
    device_type: {
      type: DataTypes.STRING,
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    last_login_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "user_login_devices",
    timestamps: true,
    underscored: true,
  }
);

module.exports = UserLoginDevice;
