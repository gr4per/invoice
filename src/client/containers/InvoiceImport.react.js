import React, {PropTypes, Component} from 'react';
import InvoiceImportMarkup from '../components/InvoiceImport';
import messages from './i18n/InvoiceImport';
import { connect } from 'react-redux';
import { importInvoices, cleanupImportReducer } from '../actions/invoice/import';

@connect(
  state => ({
    importInProgress: state.invoiceImport.importInProgress,
    importPercentage: state.invoiceImport.importPercentage,
    importResult: state.invoiceImport.importResult
  }),
  (dispatch) => {
    return {
      handleImportInvoices: (invoices) => {
        dispatch(importInvoices(invoices))
      },
      cleanImportResult: () => {
        dispatch(cleanupImportReducer())
      }
    }
  }
)
export default class InvoiceImport extends Component {

  static propTypes = {
    handleImportInvoices: PropTypes.func.isRequired,
    importInProgress: PropTypes.bool.isRequired,
    importPercentage: PropTypes.number,
    importResult: PropTypes.array,
    cleanImportResult: PropTypes.func.isRequired,
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.context.i18n.register('InvoiceImport', messages);
  }

  render() {
    const {importInProgress, importPercentage, handleImportInvoices, importResult, cleanImportResult} = this.props;
    return(
      <div>
        <InvoiceImportMarkup
          onImport={handleImportInvoices}
          importInProgress={importInProgress}
          importPercentage={importPercentage}
          importResult={importResult}
          cleanImportResult={cleanImportResult}
        />
      </div>
    );
  }
}
