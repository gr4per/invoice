"use strict";
const Sequelize = require("sequelize");

module.exports.init = function(db, config) {
  /**
   * CostDistributionPos is singe position of CostDistribution. It contains
   * CostObject and percentage information for this object
   *
   * @class CostDistributionPos
   */
  return db.define('CostDistributionPos',
    /** @lends CostDistributionPos */
    {
      /**
       * Primary key.
       */
      key: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'CostDistributionPosSN'
      },
      changedBy: {
        type: Sequelize.STRING(60),
        allowNull: false,
        field: 'ChangedBy'
      },
      changedOn: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'ChangedOn',
        defaultValue: Sequelize.NOW
      },
      costAmount: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: true,
        field: 'CostAmount'
      },
      createdBy: {
        type: Sequelize.STRING(60),
        allowNull: false,
        field: 'CreatedBy'
      },
      createdOn: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'CreatedOn',
        defaultValue: Sequelize.NOW
      },
      /**
       * CostDistribution
       */
      costDistributionSn: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        field: 'CostDistributionSN'
      },
      percentage: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: true,
        field: 'Percentage'
      },
      quantity: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: true,
        field: 'Quantity'
      },
      seqNo: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        field: 'SeqNo'
      },
      /**
       * CostObject1
       *
       * CostObject is part of CostDistribution. There are 4 types of cost objects:
       * TYPE_XXX constants, CostCenter, CostIntOrder, CostProductionOrder
       */
      costObj1Id: {
        type: Sequelize.STRING(24),
        allowNull: false,
        field: 'CostObj1ID'
      },
      /**
       * CostObject2
       */
      costObj2Id: {
        type: Sequelize.STRING(24),
        allowNull: true,
        field: 'CostObj2ID'
      },
      /**
       * CostObject3
       */
      costObj3Id: {
        type: Sequelize.STRING(24),
        allowNull: true,
        field: 'CostObj3ID'
      },
    }, {
      classMethods: {
        associate: function(models) {
          models.CostDistributionPos.belongsTo(models.CostDistribution, {
            as: 'costDistribution',
            foreignKey: 'CostDistributionSN'
          });
        }
      },
      timestamps: false,
      tableName: 'CostDistributionPos'
    });
};
