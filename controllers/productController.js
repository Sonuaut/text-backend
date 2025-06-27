import { getAllProducts as getAllProductsService, getProductById } from '../services/productService.js';

// Get All Products
export const getAllProducts = async (req, res, next) => {
  try {
    // Support both query and body for flexibility
    const page =  req.query.page || 1;
    const limit =  req.query.limit || 10;
    const categoryId = req.query.categoryId;
    let filter = {};
    if (categoryId && categoryId !== "" && categoryId !== "all") {
      filter.categoryId = categoryId;
    }
console.log("filter:",filter)
    const products = await getAllProductsService(page, limit, filter);
    res.status(200).json({ status: true, data: products });
  } catch (error) {
    res.status(500).json({ status: false, data: null, message: error.message });
  }
};

// Get Product Details
export const getProductDetails = async (req, res, next) => {
  try {
    const product = await getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ status: false, data: null, message: 'Product Not Found' });
    }
    res.status(200).json({ status: true, data: product });
  } catch (error) {
    res.status(500).json({ status: false, data: null, message: error.message });
  }
};
