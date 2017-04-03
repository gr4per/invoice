'use strict';

const suppliers = require('../stubData/suppliers.json').suppliers;
const _ = require('lodash');

/**
 * Stub rest endpoint for getting user assignment in format
 * {
 *  isCustomer: <true|false>
 *  isSupplier: <true|false>
 *  supplier: {supplier object representations in case isSupplier == true}
 *  customer: {customer object representations in case isCustomer == true}
 * }
 *
 * @param app
 * @param db
 */
module.exports = function(app, db) {
  app.get('/api/userAssignment/:userId', (req, res) => {
    res.json({
      isSupplier: true,
      isCustomer: false,
      supplier: suppliers[0]
    });
  });
};
