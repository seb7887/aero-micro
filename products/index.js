const { send } = require('micro');
const fetch = require('node-fetch');

const { apiEndpoint, headers } = require('../config');

const fetchProducts = async () => {
  const response = await fetch(`${apiEndpoint}/products`, {
    method: 'GET',
    headers
  });
  const products = await response.json();

  return products;
};

const higherCostSort = (a, b) => parseInt(b.cost) - parseInt(a.cost);

const lowerCostSort = (a, b) => parseInt(a.cost) - parseInt(b.cost);

const products = async (req, res) => {
  const productList = await fetchProducts();

  if (req.query.sort) {
    req.query.sort === 'high' && productList.sort(higherCostSort);
    req.query.sort === 'low' && productList.sort(lowerCostSort);
  }

  send(res, 200, productList);
};

module.exports = products;
