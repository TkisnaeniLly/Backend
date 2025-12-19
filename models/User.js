const { DataTypes } = require("sequelize");
const sequelize = require("../../../Config/sequelizeConnect");

const User = sequelize.define("User", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  role: {
    type: DataTypes.ENUM("admin", "customer"),
    defaultValue: "customer",
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING(20),
  },
  full_name: {
    type: DataTypes.STRING(100),
  },
  gender: {
    type: DataTypes.ENUM("L", "P"),
  },
  birth_date: {
    type: DataTypes.DATEONLY,
  },
  status: {
    type: DataTypes.ENUM("active", "nonactive", "suspended"),
    defaultValue: "active",
  },
  token_version: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  registered_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  last_login: {
    type: DataTypes.DATE,
  }
}, {
  tableName: "users",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
});

module.exports = User;
