import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const InvoiceItemFormActionPanel = ({ onBackToInvoice, onReset, onSubmit }, context) => (
  <div className="form-submit text-right">
    <Button className="pull-left" onClick={onBackToInvoice}>{context.i18n.getMessage('Commands.backtoInvoice')}</Button>
    <Button bsStyle="link" onClick={onReset}>{context.i18n.getMessage('Commands.reset')}</Button>
    <Button bsStyle="primary" onClick={onSubmit}>{context.i18n.getMessage('Commands.addNewPosition')}</Button>
  </div>
);

InvoiceItemFormActionPanel.propTypes = {
  onBackToInvoice: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

InvoiceItemFormActionPanel.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default InvoiceItemFormActionPanel;
