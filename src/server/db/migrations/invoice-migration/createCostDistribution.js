'use strict';
const Sequelize = require("sequelize");

module.exports = function(queryInterface) {
  return queryInterface.createTable('CostDistribution', {
    CostDistributionSN: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    }
  });
};
