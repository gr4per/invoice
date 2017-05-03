import { loadMethodsOfPayment } from '../external/methodOfPayment';
import { loadTermsOfPayment } from '../external/termsOfPayment';
import { loadTermsOfDelivery } from '../external/termsOfDelivery';
import { loadCurrencies } from '../external/currency';

export function loadInvoiceMasterData() {
  return function(dispatch, getState) {
    return Promise.all([
      loadTermsOfDelivery()(dispatch, getState),
      loadTermsOfPayment()(dispatch, getState),
      loadMethodsOfPayment()(dispatch, getState),
      loadCurrencies()(dispatch, getState)
    ])
  }
}
