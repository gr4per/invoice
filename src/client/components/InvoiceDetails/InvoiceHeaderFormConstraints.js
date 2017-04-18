export default {
  "invoice.extInvoiceReceiptId": {
    presence: {
      message: "^Errors.notNull"
    }
  },

  "invoice.invoiceDate": {
    presence: {
      message: "^Errors.notNull"
    }
  },

  "invoice.termsOfPaymentId": {
    presence: {
      message: "^Errors.notNull"
    }
  },

  "invoice.methodOfPaymentId": {
    presence: {
      message: "^Errors.notNull"
    }
  },

  "invoice.currencyId": {
    presence: {
      message: "^Errors.notNull"
    }
  }
};
