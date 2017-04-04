'use strict';

const methodOfPayment = require('../stubData/methodOfPayment.json').methodOfPayment;
const _ = require('lodash');

/**
 * Stub rest endpoint for methodOfPayment
 *
 * @param app
 * @param db
 */
module.exports = function(app, db) {
  app.get('/api/methodOfPayment', (req, res) => {
    res.json(methodOfPayment)
  });

  app.get('/api/methodOfPayment/:id', (req, res) => {
    res.json(_.find(methodOfPayment, { id: req.params.id }));
  });
};
