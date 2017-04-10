import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderTextInput } from '../common/redux-form';
import { renderSelect } from '../common/redux-form';
import { Button } from 'react-bootstrap';

const InvoiceItemForm = ({ handleSubmit, unitsOfMeasure }, context) => (
  <div className="form-horizontal">
    <div className="row">
      <form onSubmit={handleSubmit}>
        <div className="col-md-6">
          <Field
            label='Labels.productId'
            name='item.productId'
            component={renderTextInput}
          />
          <Field
            label="Labels.productDescShort"
            name='item.productDescShort'
            component={renderTextInput}
            required={true}
          />
          <Field
            label="Labels.quantity"
            name='item.quantity'
            component={renderTextInput}
            required={true}
          />
          <Field
            label="Labels.uom"
            name='item.uomId'
            required={true}
            component={renderSelect(
              unitsOfMeasure? unitsOfMeasure : [],
              (uom) => (
                <option key={`term-of-payment-${uom.id}`} value={uom.id}>
                  {uom.description ? uom.description : uom.id}
                </option>
              )
            )}
          />
          <Field
            label="Labels.netPrice"
            name='item.netPrice'
            component={renderTextInput}
            required={true}
          />
          <Field
            label="Labels.priceUnit"
            name='item.priceUnit'
            component={renderTextInput}
            required={true}
          />
        </div>
        <div className="col-md-6">
          <Field
            label='Labels.ean'
            name='item.extProductId'
            component={renderTextInput}
          />
          <Field
            label='Labels.taxRate'
            name='item.taxPercentage'
            component={renderTextInput}
          />
          <Field
            label='Labels.totalNetPrice'
            name='item.totalNetPrice'
            component={renderTextInput}
          />
          <Field
            label='Labels.taxAmount'
            name='item.taxAmount'
            component={renderTextInput}
            disabled={true}
          />
          <Field
            label='Labels.totalGrossPrice'
            name='item.totalGrossPrice'
            component={renderTextInput}
          />
        </div>
      </form>
    </div>
  </div>
);

InvoiceItemForm.contextTypes = {
  i18n: PropTypes.object.isRequired,
  unitsOfMeasure: PropTypes.array
};

export default InvoiceItemForm;
