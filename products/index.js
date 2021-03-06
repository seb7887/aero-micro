const { send } = require('micro');
const fetch = require('node-fetch');

const { apiEndpoint, headers } = require('../config');

const perPage = 16;

const fetchProducts = async () => {
  const response = await fetch(`${apiEndpoint}/products`, {
    method: 'GET',
    headers
  });
  const products = await response.json();

  return products;
};

// Category filter
// gaming, laptops, phones, tablets, cameras, audio, tv, drones, accesories, home, audio

// Sorting
const higherCostSort = (a, b) => parseInt(b.cost) - parseInt(a.cost);
const lowerCostSort = (a, b) => parseInt(a.cost) - parseInt(b.cost);

const products = async (req, res) => {
  let productList = await fetchProducts();

  if (req.query.category && req.query.category !== 'all') {
    const category = req.query.category;
    productList = productList.filter(product =>
      product.category.toLowerCase().includes(category)
    );
  }

  if (req.query.sort && req.query.sort !== 'recent') {
    req.query.sort === 'high' && productList.sort(higherCostSort);
    req.query.sort === 'low' && productList.sort(lowerCostSort);
  }

  const total = productList.length;

  if (req.query.page) {
    const page = req.query.page;
    const begin = page * perPage;
    const end = begin + perPage;
    productList = productList.slice(begin, end);
  }

  send(res, 200, { products: productList, total });
};

module.exports = products;
