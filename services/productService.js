import { products } from '../demo/products.js';
import { attributes } from '../demo/attributes.js';
import { prices } from '../demo/prices.js';
import { stock } from '../demo/stock.js';

function combineProductData(product) {
  const productAttributes = attributes.filter(attr => product.attributeIds.includes(attr.id));
  const productPrices = prices.filter(price => product.priceIds.includes(price.id));
  const productStock = stock.find(s => s.id === product.stockId) || {};
  return {
    ...product,
    attributes: productAttributes,
    prices: productPrices,
    stock: productStock,
    inStock: productStock.quantity > 0 ? true : false
  };
}

export const getAllProducts = async (page , limit , filter = {}) => {
  let filteredProducts = products;
  if (filter.categoryId) {
    filteredProducts = filteredProducts.filter(p => p.categoryId === filter.categoryId);
  }
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedProducts = filteredProducts.slice(start, end).map(combineProductData);
  return {
    status: true,
    data: paginatedProducts,
    page,
    total: filteredProducts.length,
    totalPages: Math.ceil(filteredProducts.length / limit)
  };
};

export const getProductById = async (id) => {
  const product = products.find(p => p.id === id);
  if (!product) return null;
  return combineProductData(product);
}; 