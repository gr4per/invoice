import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import {
  INVOICE_CREATE_ERROR,
  INVOICE_CREATE_SUCCESS,
  INVOICE_CREATE_START,
  INIT_NEW_INVOICE
} from '../../constants/invoice';
import { showNotification, removeNotification } from '../notifications';
import _ from 'lodash';

export function createInvoice(invoice) {
  return function(dispatch, getState) {
    return Promise.resolve(
      dispatch({
        type: INVOICE_CREATE_START
      })
    ).then(() => {
      return request.post(`/invoice/api/invoices/`).set(
        'Accept', 'application/json'
      ).send(invoice)
    }).then((response) => {
      return Promise.resolve(
        dispatch(showNotification('Labels.saved', 'success'))
      )
    }).then(() => {
      dispatch({
        type: INVOICE_CREATE_SUCCESS
      })
    }).catch((response) => {
      return Promise.resolve(
        dispatch(showNotification('Labels.notSaved', 'error', 10))
      ).then(() => {
        dispatch({
          type: INVOICE_CREATE_ERROR,
          error: response.body
        })
      });
    }).finally(() => {
      dispatch(removeNotification());
    });
  }
}

export function initInvoice(customerId) {
  return function(dispatch, getState) {
    return dispatch({
      type: INIT_NEW_INVOICE,
      invoice: {
        customerId: customerId,
        statusId: _.find(getState().statuses.invoice, { statusId: '100' }).statusId,
        intrastatId: '000',
        bookingDate: new Date()
      }
    })
  }
}
