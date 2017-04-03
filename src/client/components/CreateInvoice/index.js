import React, { PropTypes } from 'react';
import CreateInvoiceHeaderFormWrapper from './CreateInvoiceHeaderFormWrapper.react';

const CreateInvoiceMarkup = (props, context) => (
  <div>
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
      onUpdateInvoice={props.onUpdateInvoice}
    />
    <div className="form-submit text-right">
      <button className="btn btn-link" type="button">
        {context.i18n.getMessage('Commands.cancel')}
      </button>
      <button className="btn btn-primary" type="button">
        {context.i18n.getMessage('Commands.save')}
      </button>
    </div>
  </div>
);

CreateInvoiceMarkup.contextTypes = {
  i18n: PropTypes.object.isRequired
};

CreateInvoiceMarkup.propTypes = {
  // invoice: PropTypes.object.isRequired,
  // supplier: PropTypes.object.isRequired,
  // customer: PropTypes.object.isRequired,
  // termsOfDelivery: PropTypes.array,
  // termsOfPayment: PropTypes.array,
  // methodsOfPayment: PropTypes.array,
  // currencies: PropTypes.array,
  //
  // onInvoiceHeaderFormSubmit: PropTypes.func.isRequired,
  // onUpdateInvoice: PropTypes.func.isRequired,
  // onCancel: PropTypes.func.isRequired,
};

export default CreateInvoiceMarkup;
