import React, { PropTypes } from 'react';
import { formattedTotalSum } from '../../../../utils/MathUtils';
import { Button, Glyphicon, Table } from 'react-bootstrap';
import _ from 'lodash';

const InvoiceItemsPricePanel = ({ invoice, items, onAddPositions }, context) => {
  if(!invoice) {
    return null;
  }

  const {i18n} = context;
  let itemsTotalNetPriceSum = formattedTotalSum(i18n, items, 'totalNetPrice');
  let itemsTotalTaxAmountPriceSum = formattedTotalSum(i18n, items, 'taxAmount');
  let itemsTotalGrossPriceSum = formattedTotalSum(i18n, items, 'totalGrossPrice');
  return (
    <div className="form-submit text-right">
      <span className="invoiceReceiptItemsTotalPriceSum">
        {`${i18n.getMessage('Labels.totalNetPrice')}: ${itemsTotalNetPriceSum} ${invoice.currencyId} `}
      </span>
      <span className="invoiceReceiptItemsTotalPriceSum">
        {`${i18n.getMessage('Labels.totalTaxAmount')}: ${itemsTotalTaxAmountPriceSum} ${invoice.currencyId} `}
      </span>
      <span className="invoiceReceiptItemsTotalPriceSum">
        {`${i18n.getMessage('Labels.totalGrossPrice')}: ${itemsTotalGrossPriceSum} ${invoice.currencyId} `}
      </span>
      <Button onClick={onAddPositions}>
        <Glyphicon glyph="plus"/>&nbsp;
        {i18n.getMessage('Commands.addPositions')}
      </Button>
    </div>
  );
};

InvoiceItemsPricePanel.proptypes = {
  items: PropTypes.array.isRequired,
  invoice: PropTypes.object.isRequired,
  onAddPositions: PropTypes.func.isRequired
};

InvoiceItemsPricePanel.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default InvoiceItemsPricePanel;



