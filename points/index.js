const { send } = require('micro');
const fetch = require('node-fetch');

const { apiEndpoint, headers } = require('../config');

const points = async (req, res) => {
  const response = await fetch(`${apiEndpoint}/user/points`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      amount: 1000
    })
  });
  const newPoints = await response.json();

  send(res, 200, newPoints);
};

module.exports = points;
