import { SUPPLIER_LOAD_SUCCESS } from '../constants/supplier';
import { CUSTOMER_LOAD_SUCCESS } from '../constants/customer';
import { MOP_LOAD_SUCCESS } from '../constants/methodOfPayment';
import { TOP_LOAD_SUCCESS } from '../constants/termsOfPayment';
import { TOD_LOAD_SUCCESS } from '../constants/termsOfDelivery';
import { CURRENCIES_LOAD_SUCCESS } from '../constants/currency';
import { INVOICE_LOAD_ERROR, INVOICE_LOAD_SUCCESS, INVOICE_LOAD_START, INVOICE_UNLOAD } from '../constants/invoice';
import { INVOICE_ITEMS_LOAD_SUCCESS } from '../constants/invoiceItem';
import _ from 'lodash';

// State of editInvoice reducer:
// {
//     items: [<list of invoice receipt items>]
//     supplier: {<supplier object representation>},
//     customer: {<customer object representation>},
//     methodOfPayment: [list of available methodOfPayment],
//     termsOfPayment: [list of available termsOfPayment],
//     termsOfDelivery: [list of available termsOfDelivery],
//     currencies: [list of available currencies],
//     error: {},
//     loading: true/false - indicates loading status of invoice
//     loading: true / false
// }
export default function editInvoice(state = {}, action) {
  switch (action.type) {
    case SUPPLIER_LOAD_SUCCESS:
      return {
        ...state,
        supplier: action.supplier
      };
    case INVOICE_ITEMS_LOAD_SUCCESS:
      return {
        ...state,
        items: action.invoiceItems
      };
    case CUSTOMER_LOAD_SUCCESS:
      return {
        ...state,
        customer: action.customer
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
    case INVOICE_LOAD_START:
      return {
        ...state,
        loading: true
      };
    case INVOICE_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        invoice: action.invoice
      };
    case INVOICE_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case INVOICE_UNLOAD:
      return _.omit(state, ['invoice', 'customer', 'supplier', 'items']);
    default:
      return state;
  }
}
