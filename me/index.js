const { send } = require('micro');
const fetch = require('node-fetch');

const { apiEndpoint, headers } = require('../config');

const me = async (req, res) => {
  const response = await fetch(`${apiEndpoint}/user/me`, {
    method: 'GET',
    headers
  });
  const user = await response.json();

  send(res, 200, user);
};

module.exports = me;
