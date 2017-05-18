'use strict';
const Sequelize = require("sequelize");
const Promise = require('bluebird');

module.exports = function(queryInterface) {
  return queryInterface.createTable('GLAccount', {
    GLAccountID: {
      type: Sequelize.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    AccountType: {
      type: Sequelize.STRING(20),
      allowNull: true,
    },
    ChangedBy: {
      type: Sequelize.STRING(60),
      allowNull: false
    },
    ChangedOn: {
      type: Sequelize.DATE,
      allowNull: false
    },
    CreatedBy: {
      type: Sequelize.STRING(60),
      allowNull: false
    },
    CreatedOn: {
      type: Sequelize.DATE,
      allowNull: false
    },
    CustomerID: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    DescShort: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    ValidFrom: {
      type: Sequelize.DATE,
      allowNull: false
    },
    ValidTo: {
      type: Sequelize.DATE,
      allowNull: false
    }
  }).then(() => {
    return Promise.all([
      queryInterface.addIndex(
        'GLAccount',
        ['CustomerID'],
        { indexName: 'GLAccount_CustomerID_idx' }
      )
    ])
  })
};
