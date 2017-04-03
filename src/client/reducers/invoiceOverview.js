import { INVOICES_LOAD_ERROR, INVOICES_LOAD_SUCCESS, INVOICES_LOAD_START } from '../constants/invoice';

// State of invoiceOverview reducer:
// {
//     invoices: [],
//     error: {},
//     loading: true / false
// }
export default function invoiceOverview(state = {}, action) {
  switch (action.type) {
    case INVOICES_LOAD_START:
      return {
        ...state,
        loading: true
      };
    case INVOICES_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        invoices: action.invoices
      };
    case INVOICES_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
