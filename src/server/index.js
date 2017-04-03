'use strict';

const server = require('ocbesbn-web-init'); // Web server
const db = require('ocbesbn-db-init'); // Database
const express = require('express');

// Basic database and web server initialization.
// See database : https://github.com/OpusCapitaBusinessNetwork/db-init
// See web server: https://github.com/OpusCapitaBusinessNetwork/web-init
db.init(
  {
    mode: db.Mode.Dev,
    consul: {
      host: 'consul'
    },
    data: {
      addTestData: false
    },
    events : {
      /**
       * Every model definition may contains 'associate' function that inits model relations
       * each associate function should be called when models are registered in sequelize
       * @param db
       */
      onBeforeDataMigration : function(db) {
        console.log("Associating models....");
        for (let modelName of Object.keys(db.models)) {
          if (db.models[modelName].associate) {
            db.models[modelName].associate(db.models)
          }
        }
      }
    }
  }
).then((db) => {

  // db.models.CostDistribution.create({
  //   changedBy: 'jcadmin',
  //   createdBy: 'jcadmin',
  // }).then((cd) => {
  //   db.models.CostDistributionPos.create({
  //     changedBy: 'jcadmin',
  //     createdBy: 'jcadmin',
  //     costObj1Id: "test",
  //     costDistributionSn: cd.key
  //   }).then((cdp) => {
  //     return cd.setPositions([cdp])
  //   }).then(() => {
  //     db.models.CostDistribution.findOne().then((foundCd) => {
  //       db.models.InvoiceReceipt.create({
  //         changedBy: 'jcadmin',
  //         createdBy: 'jcadmin',
  //         bookingDate: new Date(),
  //         customerId: "jcat001",
  //         currencyId: "EUR",
  //         invoiceDate: new Date(),
  //         methodOfPaymentId: 'cheque',
  //         statusId: "101",
  //         supplierId: "hard001",
  //         termsOfPaymentId: "cash",
  //         intrastatId: "000"
  //       }).then((createdInvoice) => {
  //         db.models.InvoiceReceiptItem.create({
  //           changedBy: 'jcadmin',
  //           createdBy: 'jcadmin',
  //           costDistributionSn: foundCd.key,
  //           orderItemNo: 1,
  //           productId: "test",
  //           productKey: "test",
  //           quantity: 1,
  //           uomId: 'pec',
  //           invoiceReceiptSn: createdInvoice.key
  //         }).then(() => {
  //           db.models.InvoiceReceipt.findOne().then((foundInv) => {
  //             foundInv.getInvoiceReceiptItems().then((res) => (console.log(res)));
  //           })
  //         });
  //       });
  //     });
  //   });
  // });


  return Promise.resolve(server.init({
    server: {
      staticFilePath : express.static(__dirname + '/static'),
      webpack: {
        useWebpack: true,
        configFilePath: process.cwd() + '/webpack.config.js'
      },
      mode: server.Server.Mode.Dev,
    },
    routes : {
      addRoutes : true,
      dbInstance:db
    }
  }));
}).catch((e) => {
  server.end();
  throw e;
});
