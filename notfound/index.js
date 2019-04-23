const { send } = require('micro');

const notfound = (req, res) => send(res, 404, 'Not found');

module.exports = notfound;
