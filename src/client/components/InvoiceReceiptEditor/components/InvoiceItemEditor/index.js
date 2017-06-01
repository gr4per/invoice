import React, { PropTypes, Component } from 'react';
import messages from '../../i18n/InvoiceItemEditor'
import InvoiceItemForm from './InvoiceItemForm.react';
import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';

export default class InvoiceItemEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      unitsOfMeasure: []
    };
    this.handleCreateInvoiceItem = this.handleCreateInvoiceItem.bind(this);
  }

  static defaultProps = {
    onItemCreate: () => console.log('Invoice item is created')
  };

  static propTypes = {
    onItemCreate: PropTypes.func
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.context.i18n.register('InvoiceItemEditor', messages);
    this._fetchUnitsOfMeasure();
  }

  _fetchUnitsOfMeasure() {
    return request.get(`/invoice/api/unitsOfMeasure`).set(
      'Accept', 'application/json'
    ).then((response) => this.setState({unitsOfMeasure: response.body})
    ).catch((error) => console.log(error));
  }

  //TODO: find another way to pass invoiceKey
  handleCreateInvoiceItem(invoiceKey, payload, reset) {
    return request.post(`/invoice/api/invoices/${invoiceKey}/items`).set(
      'Accept', 'application/json'
    ).send({...payload, productKey: payload.productId}).then((response) => Promise.resolve(reset())
    ).then(() => this.props.onItemCreate()
    ).catch((error) => console.log(error));
  }

  //TODO: get rid of router usage
  render() {
    return (
      <InvoiceItemForm unitsOfMeasure={this.state.unitsOfMeasure}
                       onSave={this.handleCreateInvoiceItem.bind(null, this.context.router.params.id)}
                       onBack={() => (this.context.router.push('/invoice/'))}/>
    )
  }
}
