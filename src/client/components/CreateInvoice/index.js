import './CreateInvoice.less';
import React, { PropTypes } from 'react';
import CreateInvoiceHeaderFormWrapper from './CreateInvoiceHeaderFormWrapper.react';

const CreateInvoiceMarkup = (props, context) => (
  <div className="create-invoice">
    <h1>
      {context.i18n.getMessage('Labels.createIR')}
    </h1>
    <CreateInvoiceHeaderFormWrapper
      invoice={props.invoice}
      customer={props.customer}
      supplier={props.supplier}
      termsOfDelivery={props.termsOfDelivery}
      termsOfPayment={props.termsOfPayment}
      methodsOfPayment={props.methodsOfPayment}
      currencies={props.currencies}
      onSaveInvoice={props.onSaveInvoice}
      statusLabel={props.statusLabel}
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

CreateInvoiceMarkup.contextTypes = {
  i18n: PropTypes.object.isRequired
};

CreateInvoiceMarkup.propTypes = {
  invoice: PropTypes.object.isRequired,
  supplier: PropTypes.object.isRequired,
  customer: PropTypes.object.isRequired,
  termsOfDelivery: PropTypes.array,
  termsOfPayment: PropTypes.array,
  methodsOfPayment: PropTypes.array,
  currencies: PropTypes.array,
  statusLabel: PropTypes.func.isRequired,
  onInvoiceHeaderFormSubmit: PropTypes.func.isRequired,
  onSaveInvoice: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default CreateInvoiceMarkup;
