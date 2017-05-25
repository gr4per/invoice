'use strict';
const createGLAccount = require('./glaccount-migration/createGLAccount');

module.exports.up = function(db, config) {
  return createGLAccount(db.getQueryInterface());
};

module.exports.down = function(db, config) {
  return Promise.resolve(db.getQueryInterface().dropTable('GLAccount'));
};
