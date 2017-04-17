import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import {
  INVOICE_ITEMS_LOAD_START,
  INVOICE_ITEMS_LOAD_SUCCESS,
  INVOICE_ITEMS_LOAD_ERROR
} from '../../constants/invoiceItem';
import { showNotification, removeNotification } from '../notifications';

/**
 * Loads invoice's items by specified id (InvoiceReceiptSn)
 *
 * @param id
 */
export function loadInvoiceItems(id) {
  return function(dispatch, getState) {
    return Promise.resolve(
      dispatch({
        type: INVOICE_ITEMS_LOAD_START
      })
    ).then(() => {
      return Promise.resolve(
        dispatch(showNotification('Messages.loadingData'))
      );
    }).then(() => {
      return request.get(`/invoice/api/invoices/${id}/items`).set(
        'Accept', 'application/json'
      ).then(
        (response) => {
          dispatch({
            type: INVOICE_ITEMS_LOAD_SUCCESS,
            invoiceItems: response.body
          });
        }
      ).catch((response) => {
        console.error(response);
        return Promise.resolve(
          dispatch(showNotification('Messages.loadingDataError', 'error', 10, false))
        ).then((err) => {
          dispatch({
            type: INVOICE_ITEMS_LOAD_ERROR,
            error: response.body
          })
        })
      }).finally(() => {
        // removing all notifications or they will be left in 'notification queue'
        dispatch(removeNotification());
      });
    });
  }
}
