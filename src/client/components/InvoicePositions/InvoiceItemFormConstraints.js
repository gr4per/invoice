export default {
  "item.productDescShort": {
    presence: {
      message: "^Errors.notNull"
    }
  },

  "item.quantity": {
    presence: {
      message: "^Errors.notNull"
    },
    numericality: {
      greaterThanOrEqualTo: 0,
      notValid: "^Errors.invalidNumber",
      notGreaterThanOrEqualTo: "^Errors.notGreaterThanOrEqualTo"
    }
  },

  "item.uomId": {
    presence: {
      message: "^Errors.notNull"
    }
  },

  "item.netPrice": {
    presence: {
      message: "^Errors.notNull"
    },
    numericality: {
      greaterThanOrEqualTo: 0,
      notValid: "^Errors.invalidNumber",
      notGreaterThanOrEqualTo: "^Errors.notGreaterThanOrEqualTo"
    }
  },

  "item.priceUnit": {
    presence: {
      message: "^Errors.notNull"
    },
    numericality: {
      greaterThanOrEqualTo: 0,
      notValid: "^Errors.invalidNumber",
      notGreaterThanOrEqualTo: "^Errors.notGreaterThanOrEqualTo"
    }
  },

  "item.totalNetPrice": {
    numericality: {
      greaterThanOrEqualTo: 0,
      notValid: "^Errors.invalidNumber",
      notGreaterThanOrEqualTo: "^Errors.notGreaterThanOrEqualTo"
    }
  },

  "item.totalGrossPrice": {
    numericality: {
      greaterThanOrEqualTo: 0,
      notValid: "^Errors.invalidNumber",
      notGreaterThanOrEqualTo: "^Errors.notGreaterThanOrEqualTo"
    }
  }
};
