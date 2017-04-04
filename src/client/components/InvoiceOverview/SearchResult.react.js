import React, { PropTypes } from 'react';
import _ from 'lodash';
import MessageInfo from '../common/MessageInfo.react';
import { Button, Table, MenuItem, Glyphicon, Dropdown } from 'react-bootstrap';

const SearchResult = ({ invoices, statuses, onEdit }, context) => {
  if (_.size(invoices) === 0) {
    return (
      <MessageInfo message="No Items"/>
    );
  } else {
    const statusLabel = (statusId) => {
      let status = _.find(statuses, { statusId: statusId });
      return status ? status.description : statusId;
    };

    return (
      <Table responsive={true}>
        <thead>
        <tr>
          <th className="text-nowrap">{context.i18n.getMessage('Labels.intInvoiceNo')}</th>
          <th className="text-nowrap">{context.i18n.getMessage('Labels.extInvoiceNo')}</th>
          <th className="text-nowrap">{context.i18n.getMessage('Labels.customer')}</th>
          <th className="text-nowrap">{context.i18n.getMessage('Labels.invoiceDate')}</th>
          <th className="text-nowrap">{context.i18n.getMessage('Labels.dueDate')}</th>
          <th className="text-nowrap">{context.i18n.getMessage('Labels.totalGrossPrice')}</th>
          <th className="text-nowrap">{context.i18n.getMessage('Labels.status')}</th>
          <th className="text-nowrap"/>
        </tr>
        </thead>
        <tbody>
        {
          invoices.map((inv) => {
            return (
              <tr key={inv.key}>
                <td>
                  {inv.invoiceReceiptId}
                </td>
                <td>
                  <Button bsStyle="link">
                    {inv.extInvoiceReceiptId}
                  </Button>
                </td>
                <td>
                  {inv.customerId}
                  <br/>
                  <code>{inv.customerId}</code>
                </td>
                <td>
                  {context.i18n.formatDate(inv.invoiceDate)}
                </td>
                <td>
                  {context.i18n.formatDate(inv.dueDate)}
                </td>
                <td>
                  {inv.totalGrossPrice}&nbsp;{inv.currency}
                </td>
                <td>
                  <span className="label label-default">{statusLabel(inv.statusId)}</span>
                </td>
                <td>
                  <Dropdown id={`actions-${inv.key}`} pullRight={true} bsSize="small">
                    <Button onClick={() => {
                      onEdit(inv.key);
                    }}
                    >
                      <Glyphicon glyph="edit"/> {context.i18n.getMessage("Commands.edit")}
                    </Button>
                    <Dropdown.Toggle/>
                    <Dropdown.Menu>
                      <MenuItem href={`convert/${inv.key}`}>
                        <i className="fa fa-print" /> {context.i18n.getMessage('Commands.print')}
                      </MenuItem>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </Table>
    );
  }
};

SearchResult.propTypes = {
  invoices: PropTypes.array,
  statuses: PropTypes.array,
  onEdit: PropTypes.func.isRequired
};

SearchResult.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default SearchResult;
