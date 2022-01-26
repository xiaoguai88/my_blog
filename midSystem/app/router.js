'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
const front = require('./routers/front');
const admin =  require('./routers/admin')
module.exports = app => {
  front(app)
  // admin(app)
};