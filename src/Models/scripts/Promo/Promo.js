const { DataTypes } = require("sequelize");
const sequelize = require("../../../Config/sequelizeConnect");

const Promo = sequelize.define(
  "Promo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    promo_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    discount_type: {
      type: DataTypes.ENUM("PERCENTAGE", "NOMINAL"),
      allowNull: false,
    },
    discount_value: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "promos",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Promo;