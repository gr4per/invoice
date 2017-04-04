import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import messages from './i18n/InvoiceDetails';
import SelectCustomerWizard from '../components/CreateInvoice/SelectCustomerWizard';
import { submit } from 'redux-form';
import { CREATE_INVOICE_FORM } from '../constants/forms';
import { loadCurrentUserAssignment } from '../actions/external/userAssignment';
import { loadCurrencies } from '../actions/external/currency';
import { loadTermsOfDelivery } from '../actions/external/termsOfDelivery';
import { loadTermsOfPayment } from '../actions/external/termsOfPayment';
import { loadMethodsOfPayment } from '../actions/external/methodOfPayment';
import { loadCustomer } from '../actions/external/customers';
import { createInvoice, initInvoice } from '../actions/invoice/create';
import CreateInvoiceMarkup from '../components/CreateInvoice';

@connect(
  state => ({
    invoice: state.createInvoice.invoice,
    customer: state.createInvoice.customer,
    supplier: state.createInvoice.supplier,
    termsOfDelivery: state.createInvoice.termsOfDelivery,
    termsOfPayment: state.createInvoice.termsOfPayment,
    methodsOfPayment: state.createInvoice.methodsOfPayment,
    currencies: state.createInvoice.currencies
  }),
  (dispatch) => {
    return {
      selectCustomer: (customerId) => (dispatch(initInvoice(customerId))),
      loadUserAssignment: () => (dispatch(loadCurrentUserAssignment())),
      loadCurrencies: () => (dispatch(loadCurrencies())),
      loadTermsOfDelivery: () => (dispatch(loadTermsOfDelivery())),
      loadTermsOfPayment: () => (dispatch(loadTermsOfPayment())),
      loadMethodsOfPayment: () => (dispatch(loadMethodsOfPayment())),
      loadCustomer: (customerId) => (dispatch(loadCustomer(customerId))),
      handleInvoiceHeaderFormSubmit: () => (dispatch(submit(CREATE_INVOICE_FORM))),
      handleSaveInvoice: (invoice) => (dispatch(createInvoice(invoice)))
    }
  }
)
export default class CreateInvoice extends Component {
  static propTypes = {
    invoice: PropTypes.object,
    customer: PropTypes.object,
    supplier: PropTypes.object,
    termsOfDelivery: PropTypes.array,
    termsOfPayment: PropTypes.array,
    methodsOfPayment: PropTypes.array,
    currencies: PropTypes.array,

    selectCustomer: PropTypes.func.isRequired,
    loadUserAssignment: PropTypes.func.isRequired,
    loadCurrencies: PropTypes.func.isRequired,
    loadTermsOfDelivery: PropTypes.func.isRequired,
    loadTermsOfPayment: PropTypes.func.isRequired,
    loadMethodsOfPayment: PropTypes.func.isRequired,
    loadCustomer: PropTypes.func.isRequired,
    handleInvoiceHeaderFormSubmit: PropTypes.func.isRequired,
    handleSaveInvoice: PropTypes.func.isRequired
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.context.i18n.register('CreateInvoice', messages);

    this.props.loadUserAssignment();
    this.props.loadCurrencies();
    this.props.loadTermsOfDelivery();
    this.props.loadTermsOfPayment();
    this.props.loadMethodsOfPayment();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.invoice.customerId !== this.props.invoice.customerId) {
      this.props.loadCustomer(nextProps.invoice.customerId)
    }
  }

  _detailsPageIsReadyForRendering() {
    const { invoice, customer, supplier, termsOfDelivery, termsOfPayment, methodsOfPayment, currencies } = this.props;
    return invoice && customer && supplier && termsOfDelivery && termsOfPayment && methodsOfPayment && currencies
  }

  render() {
    return this._detailsPageIsReadyForRendering() ? <CreateInvoiceMarkup
      invoice={this.props.invoice}
      customer={this.props.customer}
      supplier={this.props.supplier}
      termsOfDelivery={this.props.termsOfDelivery}
      termsOfPayment={this.props.termsOfPayment}
      methodsOfPayment={this.props.methodsOfPayment}
      currencies={this.props.currencies}
      onInvoiceHeaderFormSubmit={this.props.handleInvoiceHeaderFormSubmit}
      onSaveInvoice={this.props.handleSaveInvoice}
      onCancel={() => (this.context.router.push('/'))}
    /> : <SelectCustomerWizard onSelectCustomer={this.props.selectCustomer}/>
  }
}
