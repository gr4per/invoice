import React, { PropTypes } from 'react';
import _ from 'lodash';
import MessageInfo from '../common/MessageInfo.react';
import { Button, Table, MenuItem, Glyphicon, Dropdown, Checkbox } from 'react-bootstrap';

const SearchResult = (
  {
    invoices,
    statusLabel,
    onEdit,
    showDeleteModal,
    isEditable,
    checkedInvoices,
    markForExport,
    unMarkForExport
  },
  context
) => {
  if (_.size(invoices) === 0) {
    return (
      <MessageInfo message="No Items"/>
    );
  } else {
    return (
      <Table responsive={true}>
        <thead>
        <tr>
          <th className="text-nowrap">
            <Checkbox
              onChange={(e) => {
                let invoiceKeys = (_.map(invoices, (inv) => (inv.key)));
                return e.target.checked? markForExport(invoiceKeys) : unMarkForExport(invoiceKeys)
              }}
              checked={_.size(checkedInvoices) === _.size(invoices)}
            />
          </th>
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
                  <Checkbox
                    onChange={(e) => (e.target.checked? markForExport([inv.key]) : unMarkForExport([inv.key]))}
                    checked={_.includes(checkedInvoices, inv.key)}
                  />
                </td>
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
                      <MenuItem className={isEditable(inv.statusId) ? '' : 'hidden'}
                                onClick={() => showDeleteModal({isShown: true, invoiceId: inv.key})}>
                        <i className="fa fa-trash" /> {context.i18n.getMessage('Commands.delete')}
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
  statusLabel: PropTypes.func.isRequired,
  showDeleteModal: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  isEditable: PropTypes.func.isRequired,
  markForExport: PropTypes.func.isRequired,
  unMarkForExport: PropTypes.func.isRequired,
  checkedInvoices: PropTypes.array
};

SearchResult.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default SearchResult;
