import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import {
  INVOICE_UPDATE_START,
  INVOICE_UPDATE_SUCCESS,
  INVOICE_UPDATE_ERROR
} from '../../constants/invoice';
import { showNotification, removeNotification } from '../notifications';

export function updateInvoice(invoice) {
  return function(dispatch, getState) {
    return Promise.resolve(
      dispatch({
        type: INVOICE_UPDATE_START
      })
    ).then(() => {
      return request.put(`/api/invoices/${invoice.key}`).set(
        'Accept', 'application/json'
      ).send(invoice)
    }).then((response) => {
      return Promise.resolve(
        dispatch(showNotification('Labels.saved', 'success'))
      )
    }).then(() => {
      dispatch({
        type: INVOICE_UPDATE_SUCCESS
      })
    }).catch((response) => {
      return Promise.resolve(
        dispatch(showNotification('Labels.notSaved', 'error', 10))
      ).then(() => {
        dispatch({
          type: INVOICE_UPDATE_ERROR,
          error: response.body
        })
      });
    }).finally(() => {
      dispatch(removeNotification());
    });
  }
}
