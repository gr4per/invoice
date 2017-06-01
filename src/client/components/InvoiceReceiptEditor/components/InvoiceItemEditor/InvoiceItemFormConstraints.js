export default {
  "productDescShort": {
    presence: {
      message: "^Errors.notNull"
    }
  },

  "quantity": {
    presence: {
      message: "^Errors.notNull"
    },
    numericality: {
      greaterThanOrEqualTo: 0,
      notValid: "^Errors.invalidNumber",
      notGreaterThanOrEqualTo: "^Errors.notGreaterThanOrEqualTo"
    }
  },

  "uomId": {
    presence: {
      message: "^Errors.notNull"
    }
  },

  "netPrice": {
    presence: {
      message: "^Errors.notNull"
    },
    numericality: {
      greaterThanOrEqualTo: 0,
      notValid: "^Errors.invalidNumber",
      notGreaterThanOrEqualTo: "^Errors.notGreaterThanOrEqualTo"
    }
  },

  "priceUnit": {
    presence: {
      message: "^Errors.notNull"
    },
    numericality: {
      greaterThanOrEqualTo: 0,
      notValid: "^Errors.invalidNumber",
      notGreaterThanOrEqualTo: "^Errors.notGreaterThanOrEqualTo"
    }
  },

  "totalNetPrice": {
    numericality: {
      greaterThanOrEqualTo: 0,
      notValid: "^Errors.invalidNumber",
      notGreaterThanOrEqualTo: "^Errors.notGreaterThanOrEqualTo"
    }
  },

  "totalGrossPrice": {
    numericality: {
      greaterThanOrEqualTo: 0,
      notValid: "^Errors.invalidNumber",
      notGreaterThanOrEqualTo: "^Errors.notGreaterThanOrEqualTo"
    }
  }
};
