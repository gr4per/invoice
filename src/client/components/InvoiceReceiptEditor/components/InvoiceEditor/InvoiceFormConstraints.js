export default {
  "extInvoiceReceiptId": {
    presence: {
      message: "^Errors.notNull"
    }
  },

  "invoiceDate": {
    presence: {
      message: "^Errors.notNull"
    }
  },

  "termsOfPaymentId": {
    presence: {
      message: "^Errors.notNull"
    }
  },

  "methodOfPaymentId": {
    presence: {
      message: "^Errors.notNull"
    }
  },

  "currencyId": {
    presence: {
      message: "^Errors.notNull"
    }
  }
};
