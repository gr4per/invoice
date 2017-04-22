'use strict';

const path = require('path');

module.exports = function(app, db) {
  app.get([
    '/',
    '/edit/:id',
    '/edit/:id/items',
    '/create',
    '/import'
  ], (req, res) => {
    res.sendFile(path.normalize(__dirname + '/../static/index.html'));
  });
};
