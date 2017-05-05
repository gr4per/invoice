import {
  INVOICES_LOAD_ERROR,
  INVOICES_LOAD_SUCCESS,
  INVOICES_LOAD_START,
  EDIT_INVOICE
} from '../constants/invoice';
import {
  INVOICE_EXPORT_ERROR,
  INVOICE_EXPORT_START,
  INVOICE_EXPORT_SUCCESS,
  MARK_FOR_EXPORT,
  UNMARK_FOR_EXPORT
} from '../constants/invoiceExport';
import _ from 'lodash';

function calculateExportLink(invoices, checked) {
  let url = '/invoice/api/invoices/export?';
  let idsToExport = _.size(checked) === 0 ?
    _.map(invoices, (inv) => (inv.key)) : checked;

  _.each(idsToExport, (id) => {
    url = url.concat(`exportIds=${id}&`)
  });
  return url;
};

// State of invoiceOverview reducer:
// {
//     invoices: [],
//     checked: [], -list of invoice sn's marked for export
//     exportLink: automatically generated link for export
//     error: {},
//     loading: true / false,
//     pagination: {first: <#>, last: <#>, length: <#>}
// }

const defaultInvoiceOverviewState = {
  pagination: { first: 0, last: 0, length: 0 },
  checked: [],
  exportLink: calculateExportLink([],[])
};

export default function invoiceOverview(state = defaultInvoiceOverviewState, action) {
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
        pagination: action.pagination,
        checked: [],
        exportLink: calculateExportLink(action.invoices, [])
      };
    case INVOICES_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case EDIT_INVOICE:
      return {
        ...state,
        editInvoiceId: action.editInvoiceId
      };
    case MARK_FOR_EXPORT:
      let checkedItemsIds = _.uniq(state.checked.concat(action.items));
      return {
        ...state,
        checked: checkedItemsIds,
        exportLink: calculateExportLink(state.invoices, checkedItemsIds)
      };
    case UNMARK_FOR_EXPORT:

      let checkedIds =  _.reject(state.checked, (id) => {
        return _.includes(action.items, id);
      });
      return {
        ...state,
        checked: checkedIds,
        exportLink: calculateExportLink(state.invoices, checkedIds)
      };
    default:
      return state;
  }
}
