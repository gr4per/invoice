'use strict';

const suppliers = require('../stubData/suppliers.json').suppliers;

/**
 * Stub rest endpoint for suppliers
 *
 * @param app
 * @param db
 */
module.exports = function(app, db) {
  app.get('/api/suppliers', (req, res) => {
    res.json(suppliers)
  });

  app.get('/api/suppliers/:id', (req, res) => {
    res.json(suppliers[0]);
  });
};
