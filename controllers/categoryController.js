import { getAllCategories } from '../services/categoryService.js';

export const getCategories = async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.status(200).json({ status: true, data: categories });
  } catch (error) {
    res.status(500).json({ status: false, data: [], message: error.message });
  }
}; 