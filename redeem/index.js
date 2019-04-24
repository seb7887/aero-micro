const { send, json } = require('micro');
const fetch = require('node-fetch');

const { apiEndpoint, headers } = require('../config');

const redeem = async (req, res) => {
  const { productId } = await json(req);
  const response = await fetch(`${apiEndpoint}/redeem`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ productId })
  });
  const message = await response.json();

  send(res, 200, message);
};

module.exports = redeem;
