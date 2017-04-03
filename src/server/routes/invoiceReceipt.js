module.exports = function(epilogue, db) {
  epilogue.resource({
    model: db.models.InvoiceReceipt,
    endpoints: [
      '/invoices',
      '/invoices/:key'
    ]
  })
};
