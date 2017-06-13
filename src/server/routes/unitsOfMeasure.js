'use strict';

const unitsOfMeasure = require('../stubData/unitsOfMeasure.json').unitsOfMeasure;

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
