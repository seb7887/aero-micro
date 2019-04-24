const { router, get } = require('microrouter');

const me = require('./me');
const points = require('./points');
const products = require('./products');
const notfound = require('./notfound');

module.exports = router(
  get('/user/me', me),
  get('/user/points', points),
  get('/products', products),
  get('/*', notfound)
);
