import React, { PropTypes } from 'react';
import SearchResult from './SearchResult.react'
import SearchForm from './SearchForm.react';
import {Pagination} from 'react-bootstrap';
import {COUNT} from '../../constants/pagination';

const InvoiceOverviewMarkup = ({ onSearch, onEdit, invoices, statuses, pagination }) => (
  <div>
    <SearchForm onSearch={onSearch} statuses={statuses}/>
    <br/>
    <SearchResult invoices={invoices} statuses={statuses} onEdit={onEdit}/>
    <br/>
    <Pagination
      className={pagination.last === pagination.length ? 'hidden' : 'shown'}
      prev
      next
      ellipsis
      boundaryLinks
      items={Math.ceil(pagination.length / COUNT)}
      maxButtons={3}
      activePage={1 + Math.floor(pagination.first / COUNT)}
      onSelect={(e) => onSearch(COUNT * (e - 1), COUNT)}/>
  </div>
);

InvoiceOverviewMarkup.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  invoices: PropTypes.array,
  statuses: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired
};

export default InvoiceOverviewMarkup;

