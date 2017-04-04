'use strict';

const currency = require('../stubData/currency.json').currencies;
const _ = require('lodash');

/**
 * Stub rest endpoint for methodOfPayment
 *
 * @param app
 * @param db
 */
module.exports = function(app, db) {
  app.get('/api/currency', (req, res) => {
    res.json(currency)
  });

  app.get('/api/currency/:id', (req, res) => {
    res.json(_.find(currency, { id: req.params.id }));
  });
};
