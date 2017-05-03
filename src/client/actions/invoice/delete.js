import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import { INVOICE_DELETE_ERROR, INVOICE_DELETE_SUCCESS, INVOICE_DELETE_START, EDIT_INVOICE } from '../../constants/invoice';
import { SHOW_DELETE_MODAL } from '../../constants/modals';
import { COUNT } from '../../constants/pagination';
import { searchInvoices } from './search';
import { showNotification, removeNotification } from '../notifications';

export const deleteInvoice = (id) => {
  return (dispatch, getState) => {
    return Promise.resolve(
      dispatch({
        type: SHOW_DELETE_MODAL,
        deleteModal: {isShown: false}
      })
    ).then(() => {
      return Promise.resolve(
        dispatch({type: INVOICE_DELETE_START})
      );
    }).then(() => {
      return request.delete(`/invoice/api/invoices/${id}`).set(
        'Accept', 'application/json'
      );
    }).then(() => {
      return Promise.resolve(
        dispatch(showNotification('Labels.invoiceDeleted', 'success'))
      ).then(() => {
        return Promise.resolve(
          dispatch({type: INVOICE_DELETE_SUCCESS})
        );
      }).then(() => {
        const pagination = getState().invoiceOverview.pagination;
        const shift = (pagination.last / pagination.first) === 1 ? 1 : 0;
        return Promise.resolve(
          dispatch(searchInvoices(COUNT * (Math.floor(pagination.first / COUNT) - shift)))
        );
      }).then(() => {
        if (getState().invoiceOverview.editInvoiceId === id) {
          dispatch({type: EDIT_INVOICE});
        };
      });
    }).catch((response) => {
      return Promise.resolve(
        dispatch(showNotification('Labels.notDeleted', 'error', 10))
      ).then(() => {
        dispatch({
          type: INVOICE_DELETE_ERROR,
          error: response.body
        });
      });
    }).finally(() => {
      dispatch(removeNotification());
    });
  };
};
