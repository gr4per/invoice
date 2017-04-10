'use strict';

const unitsOfMeasure = require('../stubData/unitsOfMeasure.json').unitsOfMeasure;
const _ = require('lodash');

/**
 * Stub rest endpoint for unitsOfMeasure
 *
 * @param app
 * @param db
 */
module.exports = function(app, db) {
  app.get('/api/unitsOfMeasure', (req, res) => {
    res.json(unitsOfMeasure);
  });
};
