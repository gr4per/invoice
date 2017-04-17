import { INVOICES_LOAD_ERROR, INVOICES_LOAD_SUCCESS, INVOICES_LOAD_START } from '../constants/invoice';

// State of invoiceOverview reducer:
// {
//     invoices: [],
//     error: {},
//     loading: true / false,
//     pagination: {first: <#>, last: <#>, length: <#>}
// }
export default function invoiceOverview(state = {pagination: {first: 0, last: 0, length: 0}}, action) {
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
        invoices: action.invoices,
        pagination: action.pagination
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
