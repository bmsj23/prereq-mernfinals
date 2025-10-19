import Product from "../models/product.model.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, message: "Products retrieved successfully", data: products });
    console.log(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, message: "Product created successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    res.status(200).json({ success: true, message: "Product retrieved successfully", data: product });
    console.log(product);

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found!" });
    }

    res.status(200).json({ success: true, message: "Product updated successfully", data: product });
    console.log(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found!" });
    }

    res.status(200).json({ success: true, message: product.name + " deleted successfully." });
    console.log(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
