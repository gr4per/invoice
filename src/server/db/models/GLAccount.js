'use strict';
const Sequelize = require("sequelize");

module.exports.init = function (db, config) {

  return db.define('GLAccount', {
      id: {
        field: 'GLAccountID',
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true
      },
      accountType: {
        field: 'AccountType',
        type: Sequelize.STRING(20),
        allowNull: true
      },
      changedBy: {
        field: 'ChangedBy',
        type: Sequelize.STRING(60),
        allowNull: false,
        defaultValue: 'jcadmin'
      },
      changedOn: {
        field: 'ChangedOn',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      createdBy: {
        field: 'CreatedBy',
        type: Sequelize.STRING(60),
        allowNull: false,
        defaultValue: 'jcadmin'
      },
      createdOn: {
        field: 'CreatedOn',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      customerId: {
        field: 'CustomerID',
        type: Sequelize.BIGINT(30),
        allowNull: false,
        defaultValue: 'jcat001'
      },
      descShort: {
        field: 'DescShort',
        type: Sequelize.STRING(100),
        allowNull: true
      },
      validFrom: {
        field: 'ValidFrom',
        type: Sequelize.DATE,
        allowNull: false
      },
      validTo: {
        field: 'ValidTo',
        type: Sequelize.DATE,
        allowNull: false
      }
    },
    {
      timestamps: false,
      tableName: 'GLAccount'
    });
};
