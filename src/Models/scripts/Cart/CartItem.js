const { DataTypes } = require("sequelize");
const sequelize = require("../../../Config/sequelizeConnect");

const CartItem = sequelize.define(
  "CartItem",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    variant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    subtotal: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
  },
  {
    tableName: "cart_items",
    timestamps: true,
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ["cart_id", "variant_id"],
      },
    ],
  }
);

module.exports = CartItem;
