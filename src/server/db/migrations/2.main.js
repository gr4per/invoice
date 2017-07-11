'use strict';
const removeInvoiceReceiptColumns = require('./invoice-migration/removeInvoiceReceiptColumns');

module.exports.up = function(db, config) {

  return removeInvoiceReceiptColumns(db.getQueryInterface());
};
