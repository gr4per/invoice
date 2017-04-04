'use strict';

const termsOfPayment = require('../stubData/termsOfPayment.json').termsOfPayment;
const _ = require('lodash');

/**
 * Stub rest endpoint for termsOfPayment
 *
 * @param app
 * @param db
 */
module.exports = function(app, db) {
  app.get('/api/termsOfPayment', (req, res) => {
    res.json(termsOfPayment)
  });

  app.get('/api/termsOfPayment/:id', (req, res) => {
    res.json(_.find(termsOfPayment, { id: req.params.id }));
  });
};
