const cors = require('micro-cors')();
const { router, get, post } = require('microrouter');

const me = require('./me');
const history = require('./history');
const points = require('./points');
const products = require('./products');
const redeem = require('./redeem');
const notfound = require('./notfound');

module.exports = cors(
  router(
    get('/user/me', me),
    get('/user/history', history),
    get('/user/points', points),
    get('/products', products),
    get('/*', notfound),
    post('/redeem', redeem)
  )
);
