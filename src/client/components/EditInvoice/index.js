import React, { PropTypes } from 'react';
import EditInvoiceHeaderFormWrapper from './EditInvoiceHeaderFormWrapper.react';

const EditInvoiceMarkup = (props, context) => (
  <div>
    <h1>
      {context.i18n.getMessage('Labels.editIR')}
    </h1>
    <EditInvoiceHeaderFormWrapper
      invoice={props.invoice}
      customer={props.customer}
      supplier={props.supplier}
      termsOfDelivery={props.termsOfDelivery}
      termsOfPayment={props.termsOfPayment}
      methodsOfPayment={props.methodsOfPayment}
      currencies={props.currencies}
      onUpdateInvoice={props.onUpdateInvoice}
    />
    <div className="form-submit text-right">
      <button className="btn btn-link" type="button" onClick={props.onCancel}>
        {context.i18n.getMessage('Commands.cancel')}
      </button>
      <button className="btn btn-primary" type="button" onClick={props.onInvoiceHeaderFormSubmit}>
        {context.i18n.getMessage('Commands.save')}
      </button>
    </div>
  </div>
);

EditInvoiceMarkup.contextTypes = {
  i18n: PropTypes.object.isRequired
};

EditInvoiceMarkup.propTypes = {
  invoice: PropTypes.object.isRequired,
  supplier: PropTypes.object.isRequired,
  customer: PropTypes.object.isRequired,
  termsOfDelivery: PropTypes.array,
  termsOfPayment: PropTypes.array,
  methodsOfPayment: PropTypes.array,
  currencies: PropTypes.array,

  onInvoiceHeaderFormSubmit: PropTypes.func.isRequired,
  onUpdateInvoice: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditInvoiceMarkup;
