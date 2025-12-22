const sequelize = require("../Config/sequelizeConnect");

// Import Models
const User = require("./scripts/Auth/User");
const UserProfile = require("./scripts/Auth/UserProfile");
const Product = require("./scripts/Catalog/Product");
const Category = require("./scripts/Catalog/Category");
const Brand = require("./scripts/Catalog/Brand");
const Media = require("./scripts/Catalog/Media");
const Variant = require("./scripts/Catalog/Variant");
const Inventory = require("./scripts/Catalog/Inventory");
const Cart = require("./scripts/Cart/Cart");
const CartItem = require("./scripts/Cart/CartItem");
const Checkout = require("./scripts/Checkout/Checkout");
const CheckoutTracking = require("./scripts/Checkout/CheckoutTracking");

// 🔥 New Imports
const AlamatPengiriman = require("./scripts/Cart/AlamatPengiriman");
const JasaPengiriman = require("./scripts/Catalog/JasaPengiriman");
const DetailPengiriman = require("./scripts/Checkout/DetailPengiriman");
const KlaimPromo = require("./scripts/Checkout/KlaimPromo");
const LokasiOperasional = require("./scripts/Catalog/LokasiOperasional");

// ... Relasi lama dipertahankan ...

// ==================
// New Relations
// ==================

// User -> AlamatPengiriman (1 : N)
User.hasMany(AlamatPengiriman, { foreignKey: "user_id" });
AlamatPengiriman.belongsTo(User, { foreignKey: "user_id" });

// Inventory -> LokasiOperasional (N : 1)
LokasiOperasional.hasMany(Inventory, { foreignKey: "location_id" });
Inventory.belongsTo(LokasiOperasional, { foreignKey: "location_id" });

// JasaPengiriman -> DetailPengiriman (1 : N)
JasaPengiriman.hasMany(DetailPengiriman, { foreignKey: "courier_id" });
DetailPengiriman.belongsTo(JasaPengiriman, { foreignKey: "courier_id" });

// User -> KlaimPromo (1 : N)
User.hasMany(KlaimPromo, { foreignKey: "user_id" });
KlaimPromo.belongsTo(User, { foreignKey: "user_id" });

module.exports = {
  sequelize,
  User,
  Product,
  Category,
  Brand,
  Media,
  Variant,
  Inventory,
  Cart,
  CartItem,
  Checkout,
  AlamatPengiriman,
  JasaPengiriman,
  DetailPengiriman,
  KlaimPromo,
  LokasiOperasional
};
