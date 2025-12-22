const sequelize = require("../Config/sequelizeConnect");

// ==================
// Import Models
// ==================
// Auth
const User = require("./scripts/Auth/User");
const UserProfile = require("./scripts/Auth/UserProfile");
const EmailVerification = require("./scripts/Auth/EmailVerification");
const UserLoginDevice = require("./scripts/Auth/UserLoginDevice");
const LoginOtp = require("./scripts/Auth/LoginOtp");

// Catalog
const Product = require("./scripts/Catalog/Product");
const Category = require("./scripts/Catalog/Category");
const Brand = require("./scripts/Catalog/Brand");
const Media = require("./scripts/Catalog/Media");
const Variant = require("./scripts/Catalog/Variant");
const Inventory = require("./scripts/Catalog/Inventory");

// Cart
const Cart = require("./scripts/Cart/Cart");
const CartItem = require("./scripts/Cart/CartItem");

// Promo & Subscription (NEW)
const Promo = require("./scripts/Promo/Promo");
const Subscription = require("./scripts/Subscription/Subscription");

// Transaction (NEW)
const Order = require("./scripts/Transaction/Order");
const Payment = require("./scripts/Transaction/Payment");
const Return = require("./scripts/Transaction/Return");

// ==================
// Relasi Auth
// ==================

// User -> Profile (1 : 1)
User.hasOne(UserProfile, { foreignKey: "user_id", onDelete: "CASCADE" });
UserProfile.belongsTo(User, { foreignKey: "user_id" });

// User -> EmailVerification (1 : N)
User.hasMany(EmailVerification, { foreignKey: "user_id", onDelete: "CASCADE" });
EmailVerification.belongsTo(User, { foreignKey: "user_id" });

// User -> Login Device (1 : N)
User.hasMany(UserLoginDevice, { foreignKey: "user_id", onDelete: "CASCADE" });
UserLoginDevice.belongsTo(User, { foreignKey: "user_id" });

// User -> Login OTP (1 : N)
User.hasMany(LoginOtp, { foreignKey: "user_id", onDelete: "CASCADE" });
LoginOtp.belongsTo(User, { foreignKey: "user_id" });

// Device -> Login OTP (1 : N)
UserLoginDevice.hasMany(LoginOtp, {
  foreignKey: "device_id",
  sourceKey: "device_id",
  onDelete: "CASCADE",
});
LoginOtp.belongsTo(UserLoginDevice, {
  foreignKey: "device_id",
  targetKey: "device_id",
});

// ==================
// Relasi Catalog
// ==================

Category.hasMany(Product, { foreignKey: "category_id", onDelete: "RESTRICT" });
Product.belongsTo(Category, { foreignKey: "category_id" });

Brand.hasMany(Product, { foreignKey: "brand_id", onDelete: "RESTRICT" });
Product.belongsTo(Brand, { foreignKey: "brand_id" });

Product.hasMany(Media, { foreignKey: "product_id", onDelete: "CASCADE" });
Media.belongsTo(Product, { foreignKey: "product_id" });

Product.hasMany(Variant, { foreignKey: "product_id", onDelete: "CASCADE" });
Variant.belongsTo(Product, { foreignKey: "product_id" });

Variant.hasOne(Inventory, { foreignKey: "variant_id", onDelete: "CASCADE" });
Inventory.belongsTo(Variant, { foreignKey: "variant_id" });

// ==================
// Relasi Cart
// ==================

User.hasMany(Cart, { foreignKey: "user_id", onDelete: "CASCADE" });
Cart.belongsTo(User, { foreignKey: "user_id" });

Cart.hasMany(CartItem, { foreignKey: "cart_id", onDelete: "CASCADE" });
CartItem.belongsTo(Cart, { foreignKey: "cart_id" });

Variant.hasMany(CartItem, { foreignKey: "variant_id", onDelete: "RESTRICT" });
CartItem.belongsTo(Variant, { foreignKey: "variant_id" });

// ==================
// Relasi Transaction (NEW)
// ==================

// User -> Order (1 : N)
User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });

// Order -> Payment (1 : 1 atau 1 : N)
Order.hasMany(Payment, { foreignKey: "order_id" });
Payment.belongsTo(Order, { foreignKey: "order_id" });

// Order/OrderItem -> Return
// Catatan: Jika Return berelasi ke Item spesifik, gunakan OrderItem jika sudah dibuat
Order.hasMany(Return, { foreignKey: "order_id" });
Return.belongsTo(Order, { foreignKey: "order_id" });

// ==================
// Export
// ==================
module.exports = {
  sequelize,
  User,
  UserProfile,
  EmailVerification,
  UserLoginDevice,
  LoginOtp,
  Product,
  Category,
  Brand,
  Media,
  Variant,
  Inventory,
  Cart,
  CartItem,
  Promo,
  Subscription,
  Order,
  Payment,
  Return,
};
