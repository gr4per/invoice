import React, { PropTypes, createElement } from 'react';
import { reduxForm } from 'redux-form';
import InvoiceItemForm from './InvoiceItemForm.react';
import InvoiceItemFormActionPanel from './InvoiceItemFormActionPanel.react';
import { INVOICE_ITEM_FORM } from '../../constants/forms';

const InvoiceItemFormWrapper = ({
  onBackToInvoice,
  onReset,
  onSaveInvoiceItem,
  onInvoiceItemFormSubmit,
  unitsOfMeasure
}, context) => {
  return (
    <div>
      <h1>
        {context.i18n.getMessage('Labels.irPositions')}
      </h1>
      {createElement(reduxForm({
        form: INVOICE_ITEM_FORM,
        onSubmit: (values) => {
          onSaveInvoiceItem(values.item)
        },
        initialValues: {
          item: {
            uomId: unitsOfMeasure? unitsOfMeasure[0].id : 0
          }
        },
        unitsOfMeasure: unitsOfMeasure
      })(InvoiceItemForm))}
      <InvoiceItemFormActionPanel onReset={onReset} onBackToInvoice={onBackToInvoice} onSubmit={onInvoiceItemFormSubmit}/>
    </div>
  );
};

InvoiceItemFormWrapper.propTypes = {
  onBackToInvoice: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  unitsOfMeasure: PropTypes.array,
};

InvoiceItemFormWrapper.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default InvoiceItemFormWrapper;


