import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';

export const fetchInvoiceReceipt = (id) => {
  return request.get(`/invoice/api/invoices/${id}`).set(
    'Accept', 'application/json'
  ).then((response) => Promise.resolve(response.body)
  ).catch((error) => { throw Error(error); })
};

export const fetchInvoiceReceiptItems = (id) => {
  return request.get(`/invoice/api/invoices/${id}/items`).set(
    'Accept', 'application/json'
  ).then((response) => Promise.resolve(response.body)
  ).catch((error) => { throw Error(error); })
};

export const fetchCustomer = (id) => {
  return request.get(`/customer/api/customers/${id}`).set(
    'Accept', 'application/json'
  ).then((response) => Promise.resolve(response.body)
  ).catch((error) => { throw Error(error); })
};

export const fetchCustomers = () => {
  return request.get(`/customer/api/customers`).set(
    'Accept', 'application/json'
  ).then((response) => Promise.resolve(response.body)
  ).catch((error) => { throw Error(error); })
};

export const fetchSupplier = (id) => {
  return request.get(`/invoice/api/suppliers/${id}`).set(
    'Accept', 'application/json'
  ).then((response) => Promise.resolve(response.body)
  ).catch((error) => { throw Error(error); })
};

export const fetchTermsOfDelivery = () => {
  return request.get('/invoice/api/termsOfDelivery/').set(
    'Accept', 'application/json'
  ).then((response) => Promise.resolve(response.body)
  ).catch((error) => { throw Error(error); })
};

export const fetchTermsOfPayment = () => {
  return request.get('/invoice/api/termsOfPayment/').set(
    'Accept', 'application/json'
  ).then((response) => Promise.resolve(response.body)
  ).catch((error) => { throw Error(error); })
};

export const fetchMethodsOfPayment = () => {
  return request.get('/invoice/api/methodOfPayment/').set(
    'Accept', 'application/json'
  ).then((response) => Promise.resolve(response.body)
  ).catch((error) => { throw Error(error); })
};

export const fetchCurrencies = () => {
  return request.get('/invoice/api/currency/').set(
    'Accept', 'application/json'
  ).then((response) => Promise.resolve(response.body)
  ).catch((error) => { throw Error(error); })
};

// TODO: dummy user
export const fetchUserAssignment = () => {
  return request.get(`/invoice/api/userAssignment/${1}`).set(
    'Accept', 'application/json'
  ).then((response) => Promise.resolve(response.body)
  ).catch((error) => { throw Error(error); })
};

export const fetchUnitsOfMeasure = () => {
  return request.get(`/invoice/api/unitsOfMeasure`).set(
    'Accept', 'application/json'
  ).then((response) => Promise.resolve(response.body)
  ).catch((error) => { throw Error(error); })
};
