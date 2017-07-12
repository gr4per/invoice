'use strict';

const Sequelize = require("sequelize");

module.exports.up = function(db, config) {

  return Promise.resolve(db.getQueryInterface().addColumn(
    'InvoiceReceipt',
    'Assignee',
    {
      type: Sequelize.STRING(255),
      allowNull: true
    }
  ));
};
