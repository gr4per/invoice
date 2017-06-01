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

export default class InvoiceEditor extends Component {

  static propTypes = {
    createMode: PropTypes.bool,
    onCreate: PropTypes.func,
    onUpdate: PropTypes.func,
    onCancel: PropTypes.func
  };

  static defaultProps = {
    createMode: false,
    onCreate: () => console.log('Invoice is created'),
    onUpdate: () => console.log('Invoice is updated')
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
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
    this.initInvoiceData = this.initInvoiceData.bind(this);
    this.updateInvoice = this.updateInvoice.bind(this);
    this.createInvoice = this.createInvoice.bind(this);
  }

  _fetchInvoiceReceipt(id) {
    return request.get(`/invoice/api/invoices/${id}`).set(
      'Accept', 'application/json'
    ).then((response) => Promise.resolve(response.body)
    ).catch((error) => { throw Error(error); })
  }

  _fetchInvoiceReceiptItems(id) {
    return request.get(`/invoice/api/invoices/${id}/items`).set(
      'Accept', 'application/json'
    ).then((response) => Promise.resolve(response.body)
    ).catch((error) => { throw Error(error); })
  }

  _fetchCustomer(id) {
    return request.get(`/invoice/api/customers/${id}`).set(
      'Accept', 'application/json'
    ).then((response) => Promise.resolve(response.body)
    ).catch((error) => { throw Error(error); })
  }

  _fetchSupplier(id) {
    return request.get(`/invoice/api/suppliers/${id}`).set(
      'Accept', 'application/json'
    ).then((response) => Promise.resolve(response.body)
    ).catch((error) => { throw Error(error); })
  }

  _fetchTermsOfDelivery() {
    return request.get('/invoice/api/termsOfDelivery/').set(
      'Accept', 'application/json'
    ).then((response) => Promise.resolve(response.body)
    ).catch((error) => { throw Error(error); })
  }

  _fetchTermsOfPayment() {
    return request.get('/invoice/api/termsOfPayment/').set(
      'Accept', 'application/json'
    ).then((response) => Promise.resolve(response.body)
    ).catch((error) => { throw Error(error); })
  }

  _fetchMethodsOfPayment() {
    return request.get('/invoice/api/methodOfPayment/').set(
      'Accept', 'application/json'
    ).then((response) => Promise.resolve(response.body)
    ).catch((error) => { throw Error(error); })
  }

  _fetchCurrencies() {
    return request.get('/invoice/api/currency/').set(
      'Accept', 'application/json'
    ).then((response) => Promise.resolve(response.body)
    ).catch((error) => { throw Error(error); })
  }

  // TODO: dummy user
  _fetchUserAssignment() {
    return request.get(`/invoice/api/userAssignment/${1}`).set(
      'Accept', 'application/json'
    ).then((response) => (response.body)
    ).catch((error) => console.log(error));
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
      userAssignment: this._fetchUserAssignment(),
      termsOfDelivery: this._fetchTermsOfDelivery(),
      termsOfPayment: this._fetchTermsOfPayment(),
      methodsOfPayment: this._fetchMethodsOfPayment(),
      currencies: this._fetchCurrencies(),
      isMasterDataReady: true
    }).then((masterData) => this.setState(masterData)
    ).catch((error) => console.error(error));
  }

  _loadInvoiceData(invoiceId) {
    this._fetchInvoiceReceipt(invoiceId).then((invoice) => {
        return Promise.props({
          invoice: invoice,
          customer: this._fetchCustomer(invoice.customerId),
          supplier: this._fetchSupplier(invoice.supplierId),
          items: this._fetchInvoiceReceiptItems(invoice.key),
          isInvoiceDataReady: true
        });
      }
    ).then((invoiceData) => this.setState(invoiceData)
    ).catch((error) => console.error(error));
  }

  _unloadInvoiceData() {
    const newState = _.omit(this.state, ['invoice', 'customer', 'supplier', 'items']);
    newState.isInvoiceDataReady = false;
    this.setState(newState);
  }

  initInvoiceData(customerId) {
    Promise.props({
      invoice: {
        supplierId: this.state.userAssignment.supplier.supplierId,
        customerId: customerId,
        statusId: _.find(this.state.statuses, { statusId: '100' }).statusId,
        intrastatId: '000',
        bookingDate: new Date()
      },
      supplier: this.state.userAssignment.supplier,
      customer: this._fetchCustomer(customerId),
      items: [],
      isInvoiceDataReady: true
    }).then((invoiceData) => this.setState(invoiceData)
    ).catch((error) => console.error(error));
  }

  updateInvoice(payload, reset) {
    request.put(`/invoice/api/invoices/${this.state.invoice.key}`).set(
      'Accept', 'application/json'
    ).send(payload).then((response) => Promise.resolve(response.body)
    ).then((invoice) => Promise.resolve(this.setState({invoice: invoice}))
    ).then(() => this.props.onUpdate()
    ).catch((error) => console.log(error));
  }

  createInvoice(payload, reset) {
    request.post(`/invoice/api/invoices`).set(
      'Accept', 'application/json'
    ).send(_.assign({}, this.state.invoice, payload)
    ).then((response) => Promise.resolve(reset())
    ).then(() => this.props.onCreate()
    ).catch((error) => console.log(error));
  }

  render() {
    if (this.state.isMasterDataReady) {
      if (this.state.isInvoiceDataReady) {
        return this.props.createMode ?
          <div className="create-invoice">
              <h1>{this.context.i18n.getMessage('Labels.createIR')}</h1>
              <InvoiceForm
                invoice={this.state.invoice}
                items={this.state.items}
                customer={this.state.customer}
                supplier={this.state.supplier}

                termsOfDelivery={this.state.termsOfDelivery}
                termsOfPayment={this.state.termsOfPayment}
                methodsOfPayment={this.state.methodsOfPayment}
                currencies={this.state.currencies}

                statusLabel={this.state.statusLabel}
                onCancel={this.props.onCancel}
                onSave={this.createInvoice}/>
          </div>
          :
          <div className="edit-invoice">
              <InvoiceForm
                invoice={this.state.invoice}
                items={this.state.items}
                customer={this.state.customer}
                supplier={this.state.supplier}

                termsOfDelivery={this.state.termsOfDelivery}
                termsOfPayment={this.state.termsOfPayment}
                methodsOfPayment={this.state.methodsOfPayment}
                currencies={this.state.currencies}

                statusLabel={this.state.statusLabel}
                onCancel={this.props.onCancel}
                onSave={this.updateInvoice}
              />
              <br/>
              <InvoiceItemsOverview items={this.state.items}/>
              {this.state.items && <InvoiceItemsPricePanel items={this.state.items}
                                                           invoice={this.state.invoice}
                                                           onAddPositions={() => (this.context.router.push(`/invoice/edit/${this.props.invoiceId}/items`))}/>}
          </div>
      } else {
        return this.props.createMode ?
          <SelectCustomerWizard onSubmit={(customerId) => this.initInvoiceData(customerId)}/> : null;
      }
    } else {
      return null;
    }
  }
}
