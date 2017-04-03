import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import messages from './i18n/CreateInvoice';
import SelectCustomerWizard from '../components/CreateInvoice/SelectCustomerWizard';
import { getFormValues } from 'redux-form';
import { NEW_INVOICE_CUSTOMER_ID } from '../constants/invoice';
import { loadCurrentUserAssignment } from '../actions/external/userAssignment';
import { loadCurrencies } from '../actions/external/currency';
import { loadTermsOfDelivery } from '../actions/external/termsOfDelivery';
import { loadTermsOfPayment } from '../actions/external/termsOfPayment';
import { loadMethodsOfPayment } from '../actions/external/methodOfPayment';
import { loadCustomer } from '../actions/external/customers';
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
      selectCustomer: (customerId) => (
        dispatch({
          type: NEW_INVOICE_CUSTOMER_ID,
          customerId: customerId
        })
      ),
      loadUserAssignment: () => (dispatch(loadCurrentUserAssignment())),
      loadCurrencies: () => (dispatch(loadCurrencies())),
      loadTermsOfDelivery: () => (dispatch(loadTermsOfDelivery())),
      loadTermsOfPayment: () => (dispatch(loadTermsOfPayment())),
      loadMethodsOfPayment: () => (dispatch(loadMethodsOfPayment())),
      loadCustomer: (customerId) => (dispatch(loadCustomer(customerId)))
    }
  }
)
export default class CreateInvoice extends Component {

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
    if(nextProps.invoice.customerId !== this.props.invoice.customerId) {
      this.props.loadCustomer(nextProps.invoice.customerId)
    }
  }

  _detailsPageIsReadyForRendering() {
    const { invoice, customer, supplier, termsOfDelivery, termsOfPayment, methodsOfPayment, currencies } = this.props;
    return invoice && customer && supplier && termsOfDelivery && termsOfPayment && methodsOfPayment && currencies
  }

  render() {
    const { invoice } = this.props;

    return this._detailsPageIsReadyForRendering() ? <CreateInvoiceMarkup
      invoice={this.props.invoice}
      customer={this.props.customer}
      supplier={this.props.supplier}

      termsOfDelivery={this.props.termsOfDelivery}
      termsOfPayment={this.props.termsOfPayment}
      methodsOfPayment={this.props.methodsOfPayment}
      currencies={this.props.currencies}


      onCancel={() => (this.context.router.push('/'))}
    /> : <SelectCustomerWizard onSelectCustomer={this.props.selectCustomer}/>
  }
}


// {/*onInvoiceHeaderFormSubmit={this.props.handleInvoiceHeaderFormSubmit}*/}
// {/*onUpdateInvoice={this.props.handleUpdateInvoice}*/}
