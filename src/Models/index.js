// ... (Import sebelumnya tetap ada)

// New Imports
const Wishlist = require("./scripts/Catalog/Wishlist");
const Review = require("./scripts/Catalog/Review");
const PartnerCompany = require("./scripts/Partner/PartnerCompany");
const PaymentMethod = require("./scripts/Payment/PaymentMethod");
const ProductHistory = require("./scripts/Catalog/ProductHistory");
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

// Checkout
const Checkout = require("./scripts/Checkout/Checkout");
const CheckoutTracking = require("./scripts/Checkout/CheckoutTracking");

// ==================
// Relasi Auth
// ==================

// User -> Profile (1 : 1)
User.hasOne(UserProfile, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
UserProfile.belongsTo(User, {
  foreignKey: "user_id",
});

// User -> EmailVerification (1 : N)
User.hasMany(EmailVerification, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
EmailVerification.belongsTo(User, {
  foreignKey: "user_id",
});

// User -> Login Device (1 : N)
User.hasMany(UserLoginDevice, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
UserLoginDevice.belongsTo(User, {
  foreignKey: "user_id",
});

// User -> Login OTP (1 : N)
User.hasMany(LoginOtp, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
LoginOtp.belongsTo(User, {
  foreignKey: "user_id",
});

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
// Tambahan Relasi
// ==================

// Wishlist (User <-> Product)
User.hasMany(Wishlist, { foreignKey: "user_id" });
Wishlist.belongsTo(User, { foreignKey: "user_id" });
Product.hasMany(Wishlist, { foreignKey: "product_id" });
Wishlist.belongsTo(Product, { foreignKey: "product_id" });

// Review (User <-> Product)
User.hasMany(Review, { foreignKey: "user_id" });
Review.belongsTo(User, { foreignKey: "user_id" });
Product.hasMany(Review, { foreignKey: "product_id" });
Review.belongsTo(Product, { foreignKey: "product_id" });

// Partner & Payment Method
PartnerCompany.hasMany(PaymentMethod, { foreignKey: "partner_id" });
PaymentMethod.belongsTo(PartnerCompany, { foreignKey: "partner_id" });

// Product History
Product.hasMany(ProductHistory, { foreignKey: "product_id" });
ProductHistory.belongsTo(Product, { foreignKey: "product_id" });

// Variant -> Inventory (1 : 1)
Variant.hasOne(Inventory, {
  foreignKey: "variant_id",
  onDelete: "CASCADE",
});
Inventory.belongsTo(Variant, {
  foreignKey: "variant_id",
});

// ==================
// Relasi Cart
// ==================

// User -> Cart (1 : N)
User.hasMany(Cart, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Cart.belongsTo(User, {
  foreignKey: "user_id",
});

// Cart -> CartItem (1 : N)
Cart.hasMany(CartItem, {
  foreignKey: "cart_id",
  onDelete: "CASCADE",
});
CartItem.belongsTo(Cart, {
  foreignKey: "cart_id",
});

// Variant -> CartItem (1 : N)
Variant.hasMany(CartItem, {
  foreignKey: "variant_id",
  onDelete: "RESTRICT",
});
CartItem.belongsTo(Variant, {
  foreignKey: "variant_id",
});

// ==================
// Relasi Checkout
// ==================

// User -> Checkout (1 : N)
User.hasMany(Checkout, {
  foreignKey: "user_id",
  onDelete: "RESTRICT",
});
Checkout.belongsTo(User, {
  foreignKey: "user_id",
});

// Cart -> Checkout (1 : 1)
Cart.hasOne(Checkout, {
  foreignKey: "cart_id",
  onDelete: "RESTRICT",
});
Checkout.belongsTo(Cart, {
  foreignKey: "cart_id",
});

// Checkout -> CheckoutTracking (1 : N)
Checkout.hasMany(CheckoutTracking, {
  foreignKey: "checkout_id",
  onDelete: "CASCADE",
});
CheckoutTracking.belongsTo(Checkout, {
  foreignKey: "checkout_id",
});

// ==================
// Export
// ==================
module.exports = {
  User,
  UserProfile,
  Product,
  Category,
  Brand,
  Inventory,
  Wishlist,
  Review,
  PartnerCompany,
  PaymentMethod,
  ProductHistory,
  // ... export lainnya

  // Cart
  Cart,
  CartItem,

  // Checkout
  Checkout,
  CheckoutTracking,
};
