"use strict";
const Sequelize = require("sequelize");

module.exports.init = function(db, config) {
  /**
   * CostDistribution is set of CostObjects. For every CostObjects within
   * distribution percentage is assigned
   *
   * @class CostDistribution
   */
  return db.define('CostDistribution',
    /** @lends CostDistribution */
    {
      /**
       * Primary key.
       */
      key: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'CostDistributionSN'
      },
      changedBy: {
        type: Sequelize.STRING(60),
        allowNull: false,
        field: 'ChangedBy',
        defaultValue: 'jcadmin'
      },
      changedOn: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'ChangedOn',
        defaultValue: Sequelize.NOW
      },
      createdBy: {
        type: Sequelize.STRING(60),
        allowNull: false,
        field: 'CreatedBy',
        defaultValue: 'jcadmin'
      },
      createdOn: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'CreatedOn',
        defaultValue: Sequelize.NOW
      }
    }, {
      classMethods: {
        associate: function(models) {
          models.CostDistribution.hasMany(models.CostDistributionPos, {
            as: 'positions',
            foreignKey: 'CostDistributionSN',
            targetKey: 'CostDistributionSN',
            onDelete: 'cascade'
          });
        }
      },
      timestamps: false,
      tableName: 'CostDistribution'
    });
};
