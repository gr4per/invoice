import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import InvoiceHeaderStaticFields from './InvoiceHeaderStaticFields.react'
import FormGroupMarkup from '../common/FormGroupMarkup';
import { renderTextInput } from '../common/redux-form';
import { renderSelect } from '../common/redux-form';

const InvoiceHeaderForm = (props, context) => (
  <div className="form-horizontal">
    <form onSubmit={props.handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <InvoiceHeaderStaticFields {...props.initialValues}/>
          <Field
            label="Labels.extInvoiceReceiptId"
            name='invoice.extInvoiceReceiptId'
            component={renderTextInput}
          />
        </div>
        <div className="col-md-6">
          <FormGroupMarkup label="Labels.status">
            <span className="label label-default">
              <nobr>
                {props.initialValues.invoice.statusId}
              </nobr>
            </span>
          </FormGroupMarkup>
          <Field
            label="Labels.accountingRecordId"
            name='invoice.accountingRecordId'
            component={renderTextInput}
          />
          <Field
            label="Labels.referenceInformation"
            name='invoice.referenceInformation'
            component={renderTextInput}
          />
          <Field
            label="Labels.termsOfPayment"
            name='invoice.termsOfPaymentId'
            component={renderSelect(
              props.initialValues.termsOfPayment,
              (top) => (
                <option key={`term-of-payment-${top.id}`} value={top.id}>
                  {top.description ? top.description : top.id}
                </option>
              ),
              <option value="" defaultValue></option>
            )}
          />
          <Field
            label="Labels.methodOfPayment"
            name='invoice.methodOfPaymentId'
            component={renderSelect(
              props.initialValues.methodsOfPayment,
              (mop) => (
                <option key={`term-of-payment-${mop.id}`} value={mop.id}>{mop.description}</option>
              ),
              <option value="" defaultValue></option>
            )}
          />
          <Field
            label="Labels.termsOfDelivery"
            name='invoice.termsOfDeliveryId'
            component={renderSelect(
              props.initialValues.termsOfDelivery,
              (tod) => (
                <option key={`term-of-payment-${tod.id}`} value={tod.id}>{tod.description}</option>
              ),
              <option value="" defaultValue></option>
            )}
          />
          <Field
            label="Labels.comment"
            name='invoice.commentary'
            component={renderTextInput}
            componentClass="textarea"
          />
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-md-6">
          <Field
            label="Labels.currency"
            name='invoice.currencyId'
            component={renderSelect(props.initialValues.currencies, (currency) => {
              return (
                <option key={`term-of-payment-${currency.id}`}
                        value={currency.id}>{currency.description}</option>
              )
            })}
          />
        </div>
        <div className="col-md-6">
          <Field
            label="Labels.orderNumber"
            name='invoice.orderNumber'
            component={renderTextInput}
          />
        </div>
      </div>
    </form>
  </div>
);

InvoiceHeaderForm.propTypes = {
  // invoice: PropTypes.object.isRequired
};

InvoiceHeaderForm.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default InvoiceHeaderForm;

