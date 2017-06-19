'use strict';

/**
 * Defines rest crud endpoint for GL Account
 *
 * @param epilogue
 * @param db
 */
module.exports = function(epilogue, db) {
  epilogue.resource({
    model: db.models.GLAccount,
    endpoints: [
      '/glAccounts',
      '/glAccounts/:id'
    ]
  });
};
