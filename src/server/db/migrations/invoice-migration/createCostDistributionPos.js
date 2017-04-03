'use strict';
const Sequelize = require("sequelize");

module.exports = function(queryInterface) {
  return queryInterface.createTable('CostDistributionPos', {
    CostDistributionPosSN: {
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
    CostAmount: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    CostDistributionSN: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
      references: {
        model: 'CostDistribution',
        key: 'CostDistributionSN'
      }
    },
    CostObj1ID: {
      type: Sequelize.STRING(24),
      allowNull: false,
    },
    CreatedBy: {
      type: Sequelize.STRING(60),
      allowNull: false
    },
    CreatedOn: {
      type: Sequelize.DATE,
      allowNull: false
    },
    Percentage: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    Quantity: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    SeqNo: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
    },
    CostObj2ID: {
      type: Sequelize.STRING(24),
      allowNull: true
    },
    CostObj3ID: {
      type: Sequelize.STRING(24),
      allowNull: true,
    }
  }).then(() => {
    return Promise.all([
      queryInterface.addIndex(
        'CostDistributionPos',
        ['CostDistributionSN'],
        { indexName: 'CostDistributionPos_CostDistributionSN_idx' }
      ),
      queryInterface.addIndex(
        'CostDistributionPos',
        ['CostObj1ID'],
        { indexName: 'CostDistributionPos_CostObj1ID_idx' }
      ),
      queryInterface.addIndex(
        'CostDistributionPos',
        ['CostObj2ID'],
        { indexName: 'CostDistributionPos_CostObj2ID_idx' }
      ),
      queryInterface.addIndex(
        'CostDistributionPos',
        ['CostObj3ID'],
        { indexName: 'CostDistributionPos_CostObj3ID_idx' }
      ),
    ]);
  });
};
