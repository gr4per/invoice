'use strict';

const termsOfDelivery = require('../stubData/termsOfDelivery.json').termsOfDelivery;
const _ = require('lodash');

/**
 * Stub rest endpoint for termsOfDelivery
 *
 * @param app
 * @param db
 */
module.exports = function(app, db) {
  app.get('/api/termsOfDelivery', (req, res) => {
    res.json(termsOfDelivery)
  });

  app.get('/api/termsOfDelivery/:id', (req, res) => {
    res.json(_.find(termsOfDelivery, { id: req.params.id }));
  });
};
