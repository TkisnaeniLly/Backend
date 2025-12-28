const { DataTypes } = require("sequelize");
const sequelize = require("../../../Config/sequelizeConnect");

const DetailPengiriman = sequelize.define(
  "DetailPengiriman",
  {
    detail_pengiriman_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    courier_id: {
      type: DataTypes.INTEGER,
    },
    tracking_number: {
      type: DataTypes.STRING(100),
    },
    shipped_at: {
      type: DataTypes.DATE,
    },
    delivered_at: {
      type: DataTypes.DATE,
    },
    pengiriman_status: {
      type: DataTypes.STRING(50),
    },
  },
  {
    tableName: "detail_pengiriman",
    timestamps: false,
  }
);

module.exports = DetailPengiriman;
