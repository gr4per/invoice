import React, { PropTypes } from 'react';
import EditInvoiceHeaderFormWrapper from './EditInvoiceHeaderFormWrapper.react';
import InvoiceItemsOverview from '../InvoicePositions/InvoiceItemsOverview.react';
import InvoiceItemsPricePanel from '../InvoicePositions/InvoiceItemsPricePanel.react';

const EditInvoiceMarkup = (props, context) => (
  <div>
    <EditInvoiceHeaderFormWrapper
      invoice={props.invoice}
      customer={props.customer}
      supplier={props.supplier}
      termsOfDelivery={props.termsOfDelivery}
      termsOfPayment={props.termsOfPayment}
      methodsOfPayment={props.methodsOfPayment}
      currencies={props.currencies}
      onUpdateInvoice={props.onUpdateInvoice}
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
    <br/>
    <InvoiceItemsOverview items={props.items}/>
    {props.items && <InvoiceItemsPricePanel items={props.items} invoice={props.invoice} onAddPositions={props.onAddPositions}/>}
  </div>
);

EditInvoiceMarkup.contextTypes = {
  i18n: PropTypes.object.isRequired
};

EditInvoiceMarkup.propTypes = {
  invoice: PropTypes.object.isRequired,
  items: PropTypes.array,
  supplier: PropTypes.object.isRequired,
  customer: PropTypes.object.isRequired,
  termsOfDelivery: PropTypes.array,
  termsOfPayment: PropTypes.array,
  methodsOfPayment: PropTypes.array,
  currencies: PropTypes.array,

  onInvoiceHeaderFormSubmit: PropTypes.func.isRequired,
  onUpdateInvoice: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onAddPositions: PropTypes.func.isRequired,
  statusLabel: PropTypes.func.isRequired,
};

export default EditInvoiceMarkup;
