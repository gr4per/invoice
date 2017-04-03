import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import messages from './i18n/EditInvoice';
import EditInvoiceMarkup from '../components/EditInvoice';
import { loadInvoice } from '../actions/invoice/load';
import { updateInvoice } from '../actions/invoice/update';
import { submit } from 'redux-form';
import {EDIT_INVOICE_FORM} from '../constants/forms';

@connect(
  state => ({
    invoice: state.editInvoice.invoice,
    customer: state.editInvoice.customer,
    supplier: state.editInvoice.supplier,
    termsOfDelivery: state.editInvoice.termsOfDelivery,
    termsOfPayment: state.editInvoice.termsOfPayment,
    methodsOfPayment: state.editInvoice.methodsOfPayment,
    currencies: state.editInvoice.currencies,
  }),
  (dispatch) => {
    return {
      loadInvoice: (id) => {
        dispatch(loadInvoice(id))
      },
      handleInvoiceHeaderFormSubmit: () => {
        dispatch(submit(EDIT_INVOICE_FORM))
      },
      handleUpdateInvoice: (id) => {
        dispatch(updateInvoice(id))
      }
    }
  }
)
export default class InvoiceDetails extends Component {
  static propTypes = {
    invoice: PropTypes.object,
    customer: PropTypes.object,
    supplier: PropTypes.object,
    termsOfDelivery: PropTypes.array,
    termsOfPayment: PropTypes.array,
    methodsOfPayment: PropTypes.array,
    currencies: PropTypes.array,
    params: PropTypes.object,

    loadInvoice: PropTypes.func.isRequired,
    handleInvoiceHeaderFormSubmit: PropTypes.func.isRequired,
    handleUpdateInvoice: PropTypes.func.isRequired,
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.context.i18n.register('InvoiceDetails', messages);
    this.props.loadInvoice(this.props.params.id);
  }

  _isReadyForRendering() {
    const { invoice, customer, supplier, termsOfDelivery, termsOfPayment, methodsOfPayment, currencies } = this.props;
    return invoice && customer && supplier && termsOfDelivery && termsOfPayment && methodsOfPayment && currencies
  }

  render() {
    return this._isReadyForRendering() ?
      <EditInvoiceMarkup
        invoice={this.props.invoice}
        customer={this.props.customer}
        supplier={this.props.supplier}

        termsOfDelivery={this.props.termsOfDelivery}
        termsOfPayment={this.props.termsOfPayment}
        methodsOfPayment={this.props.methodsOfPayment}
        currencies={this.props.currencies}

        onInvoiceHeaderFormSubmit={this.props.handleInvoiceHeaderFormSubmit}
        onUpdateInvoice={this.props.handleUpdateInvoice}
        onCancel={() => (this.context.router.push('/'))}
      /> : null;
  }
}
