import {
  INVOICE_CREATE_START,
  INVOICE_CREATE_SUCCESS,
  INVOICE_CREATE_ERROR,
  NEW_INVOICE_CUSTOMER_ID
} from '../constants/invoice';
import { ASSIGNMENT_LOAD_SUCCESS } from '../constants/userAssignment';
import { MOP_LOAD_SUCCESS } from '../constants/methodOfPayment';
import { TOP_LOAD_SUCCESS } from '../constants/termsOfPayment';
import { TOD_LOAD_SUCCESS } from '../constants/termsOfDelivery';
import { CUSTOMER_LOAD_SUCCESS } from '../constants/customer';
import { CURRENCIES_LOAD_SUCCESS } from '../constants/currency';

// State of createInvoice reducer:
// {
//     invoice: {<invoice object representation>},
//     supplier: {<supplier object representation>},
//     methodOfPayment: [list of available methodOfPayment],
//     termsOfPayment: [list of available termsOfPayment],
//     termsOfDelivery: [list of available termsOfDelivery],
//     currencies: [list of available currencies],
//     error: {},
//     loading: true / false
// }
export default function createInvoice(state = { invoice: { type: 'invoice' } }, action) {
  switch (action.type) {
    case NEW_INVOICE_CUSTOMER_ID:
      return {
        ...state,
        invoice: {
          ...state.invoice,
          customerId: action.customerId
        }
      };
    case ASSIGNMENT_LOAD_SUCCESS:
      return {
        ...state,
        supplier: action.userAssignment.supplier
      };
    case MOP_LOAD_SUCCESS:
      return {
        ...state,
        methodsOfPayment: action.methodsOfPayment
      };
    case TOP_LOAD_SUCCESS:
      return {
        ...state,
        termsOfPayment: action.termsOfPayment
      };
    case TOD_LOAD_SUCCESS:
      return {
        ...state,
        termsOfDelivery: action.termsOfDelivery
      };
    case CURRENCIES_LOAD_SUCCESS:
      return {
        ...state,
        currencies: action.currencies
      };
    case CUSTOMER_LOAD_SUCCESS:
      return {
        ...state,
        customer: action.customer
      };
    default:
      return state;
  }
}
