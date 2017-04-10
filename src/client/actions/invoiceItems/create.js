import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import {
  INVOICE_ITEM_CREATE_START,
  INVOICE_ITEM_CREATE_ERROR,
  INVOICE_ITEM_CREATE_SUCCESS
} from '../../constants/invoiceItem';
import {INVOICE_ITEM_FORM} from  '../../constants/forms';
import { showNotification, removeNotification } from '../notifications';
import { reset } from 'redux-form';


const populateItem = (item) => {
  let populatedItem = {...item};
  populatedItem.productKey = item.productId;

  return populatedItem;
};

export function createInvoiceItem(invoiceKey, item) {
  return function(dispatch, getState) {
    return Promise.resolve(
      dispatch({
        type: INVOICE_ITEM_CREATE_START
      })
    ).then(() => {
      return request.post(`/api/invoices/${invoiceKey}/items`).set(
        'Accept', 'application/json'
      ).send(populateItem(item))
    }).then((response) => {
      return Promise.resolve(
        dispatch(showNotification('Labels.saved', 'success'))
      )
    }).then(() => {
      dispatch({
        type: INVOICE_ITEM_CREATE_SUCCESS
      });
      dispatch(reset(INVOICE_ITEM_FORM));
    }).catch((response) => {
      return Promise.resolve(
        dispatch(showNotification('Labels.notSaved', 'error', 10))
      ).then(() => {
        dispatch({
          type: INVOICE_ITEM_CREATE_ERROR,
          error: response.body
        })
      });
    }).finally(() => {
      dispatch(removeNotification());
    });
  }
};
