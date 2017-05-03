import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { searchInvoices } from '../actions/invoice/search';
import { deleteInvoice } from '../actions/invoice/delete';
import InvoiceOverviewMarkup from '../components/InvoiceOverview';
import messages from './i18n/InvoiceOverview';
import statusLabel from '../utils/statusLabel';
import { SHOW_DELETE_MODAL } from '../constants/modals';
import { EDIT_INVOICE } from '../constants/invoice';
import _ from 'lodash';

@connect(
  state => ({
    editInvoiceId: state.invoiceOverview.editInvoiceId,
    invoices: state.invoiceOverview.invoices,
    pagination: state.invoiceOverview.pagination,
    statuses: state.statuses.invoice,
    statusLabel: (statusId) => (statusLabel(state.statuses.invoice, statusId)),
    isEditable: (statusId) => {
      return !_.includes(['approved', 'transferred'],
        (state.statuses.invoice.find((status) => status.statusId === statusId) || {}).description)
    },
    deleteModal: state.modals.deleteModal
  }),
  (dispatch) => {
    return {
      handleSearchInvoices: (offset, count) => {
        dispatch(searchInvoices(offset, count))
      },
      handleDeleteInvoice: (id) => {
        dispatch(deleteInvoice(id))
      },
      handleEditInvoice: (id) => {
        dispatch({
          type: EDIT_INVOICE,
          editInvoiceId: id
        })
      },
      showDeleteModal: (deleteModal) => {
        dispatch({
          type: SHOW_DELETE_MODAL,
          deleteModal: deleteModal
        })
      }
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
        editInvoiceId={this.props.editInvoiceId}
        onEdit={this.props.handleEditInvoice}
        onDelete={this.props.handleDeleteInvoice}
        showDeleteModal={this.props.showDeleteModal}
        deleteModal={this.props.deleteModal}
        isEditable={this.props.isEditable}
      />
    );
  }
}
