const { DataTypes } = require("sequelize");
const sequelize = require("../../../Config/sequelizeConnect");

const Cart = sequelize.define(
  "Cart",
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
    status: {
      type: DataTypes.ENUM("ACTIVE", "CHECKOUT"),
      defaultValue: "ACTIVE",
    },
  },
  {
    tableName: "carts",
    timestamps: true,
    underscored: true,
  }
);

module.exports = Cart;
