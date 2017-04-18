import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { searchInvoices } from '../actions/invoice/search';
import InvoiceOverviewMarkup from '../components/InvoiceOverview';
import messages from './i18n/InvoiceOverview';
import statusLabel from '../utils/statusLabel';

@connect(
  state => ({
    invoices: state.invoiceOverview.invoices,
    pagination: state.invoiceOverview.pagination,
    statuses: state.statuses.invoice,
    statusLabel: (statusId) => (statusLabel(state.statuses.invoice, statusId))
  }),
  (dispatch) => {
    return {
      handleSearchInvoices: (offset, count) => {
        dispatch(searchInvoices(offset, count))
      }
      // handleDeleteInvoice: (invoiceId) => {
      //   dispatch(deleteCampaign(campaignId))
      // }
    }
  }
)
export default class InvoiceOverview extends Component {
  static propTypes = {
    invoices: PropTypes.array,
    statuses: PropTypes.array,
    statusLabel: PropTypes.func.isRequired,
    handleSearchInvoices: PropTypes.func.isRequired
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.context.i18n.register('InvoiceOverview', messages);
  }

  componentDidMount() {
    this.props.handleSearchInvoices();
  }

  render() {
    return (
      <InvoiceOverviewMarkup
        onSearch={this.props.handleSearchInvoices}
        invoices={this.props.invoices}
        statuses={this.props.statuses}
        statusLabel={this.props.statusLabel}
        pagination={this.props.pagination}
        onEdit={(id) => (this.context.router.push(`/invoice/edit/${id}`))}
      />
    );
  }
}
