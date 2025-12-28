const sequelize = require("../Config/sequelizeConnect");

// ... (Import sebelumnya tetap ada)

// New Imports
const Wishlist = require("./scripts/Catalog/Wishlist");
const Review = require("./scripts/Catalog/Review");
const PartnerCompany = require("./scripts/Partner/PartnerCompany");
const PaymentMethod = require("./scripts/Payment/PaymentMethod");
const ProductHistory = require("./scripts/Catalog/ProductHistory");
// ==================
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
// Checkout
const Checkout = require("./scripts/Checkout/Checkout");
const CheckoutTracking = require("./scripts/Checkout/CheckoutTracking");

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
// Tambahan Relasi
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

// User -> KlaimPromo (1 : N)
User.hasMany(KlaimPromo, { foreignKey: "user_id" });
KlaimPromo.belongsTo(User, { foreignKey: "user_id" });

module.exports = {
  sequelize,
  User,
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
  sequelize,
  User,
  UserProfile,
  EmailVerification,
  UserLoginDevice,
  LoginOtp,
  User,
  UserProfile,
  Product,
  Category,
  Brand,
  Inventory,
  Cart,
  CartItem,
  Promo,
  Subscription,
  Order,
  Payment,
  Return,
  Cart,
  CartItem,
  Checkout,
  AlamatPengiriman,
  JasaPengiriman,
  DetailPengiriman,
  KlaimPromo,
  LokasiOperasional
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
