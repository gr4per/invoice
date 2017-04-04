import React, { PropTypes } from 'react';
import SearchResult from './SearchResult.react'
import SearchForm from './SearchForm.react';


const InvoiceOverviewMarkup = ({ onSearch, onEdit, invoices, statuses }) => (
  <div>
    <SearchForm onSearch={onSearch} statuses={statuses}/>
    <br/>
    <SearchResult invoices={invoices} statuses={statuses} onEdit={onEdit}/>
  </div>
);

InvoiceOverviewMarkup.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  invoices: PropTypes.array,
  statuses: PropTypes.array.isRequired
};

export default InvoiceOverviewMarkup;

