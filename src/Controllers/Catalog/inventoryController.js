const Inventory = require("../../Models/scripts/Catalog/Inventory");

// GET all inventories
exports.getAllInventories = async (req, res) => {
  try {
    const inventories = await Inventory.findAll();
    res.status(200).json({
      success: true,
      data: inventories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET inventory by ID
exports.getInventoryById = async (req, res) => {
  try {
    const inventory = await Inventory.findByPk(req.params.id);

    if (!inventory) {
      return res.status(404).json({
        success: false,
        message: "Inventory not found",
      });
    }

    res.status(200).json({
      success: true,
      data: inventory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// CREATE inventory
exports.createInventory = async (req, res) => {
  try {
    const inventory = await Inventory.create(req.body);
    res.status(201).json({
      success: true,
      data: inventory,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE inventory
exports.updateInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByPk(req.params.id);

    if (!inventory) {
      return res.status(404).json({
        success: false,
        message: "Inventory not found",
      });
    }

    await inventory.update(req.body);
    res.status(200).json({
      success: true,
      data: inventory,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE inventory
exports.deleteInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByPk(req.params.id);

    if (!inventory) {
      return res.status(404).json({
        success: false,
        message: "Inventory not found",
      });
    }

    await inventory.destroy();
    res.status(200).json({
      success: true,
      message: "Inventory deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
