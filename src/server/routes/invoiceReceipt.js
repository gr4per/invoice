/**
 * Defines rest crud endpoint for invoice receipt
 *
 * @param epilogue
 * @param db
 */
module.exports = function(epilogue, db) {
  epilogue.resource({
    model: db.models.InvoiceReceipt,
    endpoints: [
      '/invoices',
      '/invoices/:key'
    ]
  })
};
