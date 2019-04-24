const { send } = require('micro');
const fetch = require('node-fetch');

const { apiEndpoint, headers } = require('../config');

const history = async (req, res) => {
  const response = await fetch(`${apiEndpoint}/user/history`, {
    method: 'GET',
    headers
  });
  const userHistory = await response.json();

  send(res, 200, userHistory);
};

module.exports = history;
