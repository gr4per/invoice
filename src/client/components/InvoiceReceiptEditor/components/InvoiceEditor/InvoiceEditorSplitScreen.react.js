import React, { PropTypes, Component } from 'react';
import InvoiceEditor from '../InvoiceEditor';
import { fetchInvoiceReceiptItems } from '../../common/fetchers';
import InvoiceItemsOverview from './InvoiceItemsOverview.react';
import ReactPDF from 'react-pdf';

export default class InvoiceEditorSplitScreen extends Component {

  static propTypes = {
    invoiceId: PropTypes.number,
    onCancel: PropTypes.func.isRequired
  };

  static contextTypes = {};

  state = {
    items: []
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.createMode && nextProps.invoiceId) {
      return fetchInvoiceReceiptItems(nextProps.invoiceId).then((items) => {
        this.setState({ items })
      })
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            {this.props.invoiceId && <ReactPDF
              file="/invoice/static/test_workarea/invoiceReceipt_TEST.pdf"
            />}
          </div>
          <div className="col-md-6">
            <InvoiceEditor invoiceId={this.props.invoiceId} onCancel={this.props.onCancel}/>
          </div>
        </div>
        {this.props.invoiceId && <InvoiceItemsOverview items={this.state.items}/>}
      </div>
    );
  }
};
