'use strict';
const _ = require('lodash');

/**
 * Rest endpoint for exporting InvoiceReceipts into JSON format
 *
 * @param app
 * @param db
 */
module.exports = function(app, db) {
  app.get('/api/invoices/export', (req, res) => {
    console.log(req.query.exportIds);
    console.log(_.map(req.query.exportIds, parseInt));

    db.models.InvoiceReceipt.findAll({
      where: {
        key: {
          $in: _.map(_.castArray(req.query.exportIds), (stringId) => (parseInt(stringId, 10)))
        }
      },
      include: [{
        model: db.models.InvoiceReceiptItem, as: 'invoiceReceiptItems'
      }]
    }).then((invoiceReceipts) => {
      res.set({
        'Content-Disposition': `attachment; filename=invoiceExport-${Date.now()}.json`,
        'Content-type': 'text/csv'
      });
      res.send((_.isEmpty(invoiceReceipts) || _.isNil(invoiceReceipts)) ? {} : invoiceReceipts);
    });
  });
};
