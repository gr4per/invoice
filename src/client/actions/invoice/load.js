import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import { INVOICE_LOAD_ERROR, INVOICE_LOAD_SUCCESS, INVOICE_LOAD_START } from '../../constants/invoice';
import { showNotification, removeNotification } from '../notifications';
import { loadSupplier } from '../external/supplier';
import { loadCustomer } from '../external/customers';
import { loadMethodsOfPayment } from '../external/methodOfPayment';
import { loadTermsOfPayment } from '../external/termsOfPayment';
import { loadTermsOfDelivery } from '../external/termsOfDelivery';
import { loadCurrencies } from '../external/currency';
import { loadInvoiceItems } from '../invoiceItems/load';

export function loadInvoice(id) {
  return function(dispatch, getState) {
    return Promise.resolve(
      dispatch({
        type: INVOICE_LOAD_START
      })
    ).then(() => {
      return Promise.resolve(
        dispatch(showNotification('Messages.loadingData'))
      );
    }).then(() => {
      return request.get(`/api/invoices/${id}`).set(
        'Accept', 'application/json'
      ).then(
        (response) => {
          dispatch({
            type: INVOICE_LOAD_SUCCESS,
            invoice: response.body
          });
          return Promise.resolve(response.body)
        }
      ).then((invoice) => {
        return Promise.all([
          loadSupplier(invoice.supplierId)(dispatch, getState),
          loadCustomer(invoice.customerId)(dispatch, getState),
          loadTermsOfDelivery()(dispatch, getState),
          loadTermsOfPayment()(dispatch, getState),
          loadMethodsOfPayment()(dispatch, getState),
          loadCurrencies()(dispatch, getState),
          loadInvoiceItems(invoice.key)(dispatch, getState)
        ])
      }).catch((response) => {
        console.error(response);
        return Promise.resolve(
          dispatch(showNotification('Messages.loadingDataError', 'error', 10, false))
        ).then((err) => {
          dispatch({
            type: INVOICE_LOAD_ERROR,
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
