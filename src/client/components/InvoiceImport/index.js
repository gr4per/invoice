import React, { PropTypes } from 'react';
import InvoiceImportDropzone from './InvoiceImportDropzone.react';
import ImportResult from './ImportResult.react';
import _ from 'lodash';
import { ProgressBar } from 'react-bootstrap';

const InvoiceImportMarkup = (
  { onImport, importInProgress, importPercentage, importResult, cleanImportResult }, { i18n }) => (
  <div>
    <h1>{i18n.getMessage('InvoiceImport.header')}</h1>
    <InvoiceImportDropzone onImport={onImport}/>
    <br/>
    {importInProgress && <ProgressBar active={true} now={importPercentage} label={`${importPercentage}%`}/>}
    {_.size(importResult) > 0 &&
    <ImportResult
      importStatistics={importResult}
      cleanImportResult={cleanImportResult}
    />}
  </div>
);

InvoiceImportMarkup.propTypes = {
  onImport: PropTypes.func.isRequired,
  importInProgress: PropTypes.bool,
  importPercentage: PropTypes.number,
  importResult: PropTypes.array,
  cleanImportResult: PropTypes.func.isRequired
};

InvoiceImportMarkup.defaultProps = {
  importInProgress: false,
  importPercentage: 0,
  importResult: []
};


InvoiceImportMarkup.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default InvoiceImportMarkup;
