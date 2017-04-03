import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { searchInvoices } from '../actions/invoice/search';
import InvoiceOverviewMarkup from '../components/InvoiceOverview';
import messages from './i18n/InvoiceOverview';

@connect(
  state => ({
    invoices: state.invoiceOverview.invoices,
    statuses: state.statuses.invoiceStatuses
  }),
  (dispatch) => {
    return {
      handleSearchInvoices: () => {
        dispatch(searchInvoices())
      },
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
    return(
      <InvoiceOverviewMarkup
        onSearch={this.props.handleSearchInvoices}
        invoices={this.props.invoices}
        statuses={this.props.statuses}
        onEdit={(id) => (this.context.router.push(`/edit/${id}`))}
      />
    );
  }
}
