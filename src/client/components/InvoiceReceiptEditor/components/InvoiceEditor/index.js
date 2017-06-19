import './InvoiceEditor.less';
import React, { Component, PropTypes } from 'react';
import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import _ from 'lodash';
import InvoiceForm from './InvoiceForm.react';
import SelectCustomerWizard from './SelectCustomerWizard';
import messages from '../../i18n/InvoiceEditor';
import InvoiceItemsOverview from './InvoiceItemsOverview.react';
import InvoiceItemsPricePanel from './InvoiceItemsPricePanel.react';
import {
  fetchInvoiceReceipt,
  fetchInvoiceReceiptItems,
  fetchCustomer,
  fetchCustomers,
  fetchSupplier,
  fetchSupplierAddresses,
  fetchSupplierContacts,
  fetchTermsOfDelivery,
  fetchTermsOfPayment,
  fetchMethodsOfPayment,
  fetchCurrencies
} from '../../common/fetchers';

export default class InvoiceEditor extends Component {

  static propTypes = {
    createMode: PropTypes.bool,
    onCancel: PropTypes.func
  };

  static defaultProps = {
    createMode: false,
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
    currentUserData: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      invoice: {},
      isMasterDataReady: false,
      isInvoiceDataReady: false,
      statuses: [
        { 'statusId': '070', 'description': 'rejected' },
        { 'statusId': '100', 'description': 'created' },
        { 'statusId': '390', 'description': 'approved' },
        { 'statusId': '400', 'description': 'transferred' },
        { 'statusId': '800', 'description': 'deleted' },
        { 'statusId': '820', 'description': 'registered' }
      ],
      statusLabel: (statusId) => {
        let status = _.find(this.state.statuses, { statusId: statusId });
        return status ? status.description : statusId;
      }
    };
  }

  componentWillMount() {
    this.context.i18n.register('InvoiceEditor', messages);
    this._loadMasterData();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.createMode && nextProps.invoiceId !== this.props.invoiceId) {
      nextProps.invoiceId ? this._loadInvoiceData(nextProps.invoiceId) : this._unloadInvoiceData();
    }
  }

  _loadMasterData() {
    Promise.props({
      termsOfDelivery: fetchTermsOfDelivery(),
      termsOfPayment: fetchTermsOfPayment(),
      methodsOfPayment: fetchMethodsOfPayment(),
      currencies: fetchCurrencies(),
      customers: fetchCustomers(),
      isMasterDataReady: true
    }).then((masterData) => this.setState(masterData)
    ).catch((error) => {
      throw Error(error);
    });
  }

  _loadInvoiceData(invoiceId) {
    fetchInvoiceReceipt(invoiceId).then((invoice) => {
        return Promise.props({
          invoice: invoice,
          customer: fetchCustomer(invoice.customerId),
          supplier: fetchSupplier(invoice.supplierId),
          items: fetchInvoiceReceiptItems(invoice.key),
          isInvoiceDataReady: true
        });
      }
    ).then((invoiceData) => this.setState(invoiceData)
    ).catch((error) => {
      throw Error(error);
    })
  }

  _unloadInvoiceData() {
    const newState = _.omit(this.state, ['invoice', 'customer', 'supplier', 'items']);
    newState.isInvoiceDataReady = false;
    this.setState(newState);
  }

  initInvoiceData(customerId) {
    Promise.props({
      invoice: {
        supplierId: this.context.currentUserData.supplierid,
        customerId: customerId,
        statusId: _.find(this.state.statuses, { statusId: '100' }).statusId,
        intrastatId: '000',
        bookingDate: new Date()
      },
      supplier: fetchSupplier(this.context.currentUserData.supplierid),
      supplierAddresses: fetchSupplierAddresses(this.context.currentUserData.supplierid),
      supplierContacts: fetchSupplierContacts(this.context.currentUserData.supplierid),
      customer: fetchCustomer(customerId),
      items: [],
      isInvoiceDataReady: true
    }).then((invoiceData) => this.setState(invoiceData)
    ).catch((error) => {
      throw Error(error);
    })
  }

  updateInvoice(payload, reset) {
    request.put(`/invoice/api/invoices/${this.state.invoice.key}`).set(
      'Accept', 'application/json'
    ).send(payload).then((response) => Promise.resolve(response.body)
    ).then((invoice) => this.setState({ invoice: invoice })
    ).catch((error) => {
      throw Error(error);
    })
  }

  createInvoice(payload, reset) {
    request.post(`/invoice/api/invoices`).set(
      'Accept', 'application/json'
    ).send(_.assign({}, this.state.invoice, payload)
    ).then((response) => reset()
    ).catch((error) => {
      throw Error(error);
    })
  }


  render() {
    if (this.state.isMasterDataReady) {
      if (this.state.isInvoiceDataReady) {
        const { createMode } = this.props;
        return (
          <div className={`${createMode ? 'create' : 'edit'}-invoice`}>
            <InvoiceForm
              formHeader={createMode ? this.context.i18n.getMessage('Labels.createIR') : ''}
              invoice={this.state.invoice}
              items={this.state.items}
              customer={this.state.customer}
              supplier={this.state.supplier}
              supplierAddresses={this.state.supplierAddresses}
              supplierContacts={this.state.supplierContacts}

              termsOfDelivery={this.state.termsOfDelivery}
              termsOfPayment={this.state.termsOfPayment}
              methodsOfPayment={this.state.methodsOfPayment}
              currencies={this.state.currencies}

              statusLabel={this.state.statusLabel}
              onCancel={this.props.onCancel}
              onSave={createMode ? ::this.createInvoice : ::this.updateInvoice}/>

            <br/>
            {this.state.invoice.invoiceReceiptId && <InvoiceItemsOverview items={this.state.items}/>}
            <InvoiceItemsPricePanel
              items={this.state.items}
              invoice={this.state.invoice.invoiceReceiptId ? this.state.invoice : undefined}
              onAddPositions={() => (this.context.router.push(`/invoice/edit/${this.props.invoiceId}/items`))}
            />
          </div>
        );
      } else {
        return this.props.createMode ?
          <SelectCustomerWizard
            customers={this.state.customers}
            onSubmit={(customerId) => this.initInvoiceData(customerId)}
          /> : null;
      }
    } else {
      return null;
    }
  }
}
