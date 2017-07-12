import React, { PropTypes } from 'react';

import UiHelpers from '../helpers/UIHelpers.react';

import './TaskItem.less';


class TaskItem extends React.Component {
  static propTypes = {
    invoice: PropTypes.object.isRequired,
  }
  render() {
    const invoice = this.props.invoice;

    const iconSize = {
      width: 25,
      height: 25,
    };

    const flags = this.props.invoice.Flags.map((flag => (
      UiHelpers.getIconForInvoiceFlag(flag, iconSize)
    )));

    return (
      <div className="list-item-content">
        <div className="list-item-wide-column">
          <div className="list-item">
            <span>Company</span>
            <span className="value">{invoice.PayerName}</span>
          </div>
          <div className="divider" />
          <div className="list-item">
            <span>Supplier</span>
            <span className="value">{invoice.SupplierName}</span>
          </div>
        </div>
        <div className="list-item-wide-column">
          <div className="list-item">
            <span>Due date</span>
            <span className="value">
              invoice.DueDate
            </span>
          </div>
          <div className="divider" />
          <div className="list-item">
            <span className="value">
              invoice.Status
            </span>
            <span className="value">
              {UiHelpers.formatAmount(
                invoice.GrossAmount,
                invoice.Currency)} {invoice.Currency}
            </span>
          </div>
        </div>
        <div className="list-item-narrow-column">
          {flags}
        </div>
      </div>
    );
  }
}

export default TaskItem;
