import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reset, submit } from 'redux-form';
import { INVOICE_ITEM_FORM } from '../constants/forms';
import { createInvoiceItem } from '../actions/invoiceItems/create';
import InvoiceItemFormWrapper from '../components/InvoicePositions/InvoiceItemFormWrapper.react';
import messages from './i18n/InvoicePositions';
import { loadUnitsOfMeasure } from '../actions/external/unitsOfMeasure';

@connect(
  state => ({
    unitsOfMeasure: state.invoicePositions.unitsOfMeasure
  }),
  (dispatch) => {
    return {
      handleResetInvoiceItemForm: () => {
        dispatch(reset(INVOICE_ITEM_FORM));
      },
      handleInvoiceItemFormSubmit: () => (dispatch(submit(INVOICE_ITEM_FORM))),
      handleSaveInvoiceItem: (invoiceKey, item) => {
        dispatch(createInvoiceItem(invoiceKey, item))
      },
      handleLoadUnitsOfMEasure: () => {
        dispatch(loadUnitsOfMeasure());
      }
    }
  }
)
export default class InvoicePositions extends Component {
  static contextTypes = {
    i18n: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.context.i18n.register('InvoicePositions', messages);
    this.props.handleLoadUnitsOfMEasure();
  }

  render() {
    const { router } = this.context;
    return (
      <InvoiceItemFormWrapper
        onReset={this.props.handleResetInvoiceItemForm}
        onBackToInvoice={() => (router.push(`/invoice/edit/${router.params.id}`))}
        onInvoiceItemFormSubmit={this.props.handleInvoiceItemFormSubmit}
        onSaveInvoiceItem={this.props.handleSaveInvoiceItem.bind(null, router.params.id)}
        unitsOfMeasure={this.props.unitsOfMeasure}
      />
    );
  }
}
