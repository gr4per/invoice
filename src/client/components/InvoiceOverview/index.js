import React, { PropTypes } from 'react';
import SearchResult from './SearchResult.react'
import SearchForm from './SearchForm.react';
import { Pagination } from 'react-bootstrap';
import { COUNT } from '../../constants/pagination';
import InvoiceDeleteModal from "./InvoiceDeleteModal.react";

const InvoiceOverviewMarkup = ({ onSearch, onEdit, onDelete, invoices, statuses, statusLabel, pagination, deleteModal, showDeleteModal }) => (
  <div>
    <SearchForm onSearch={onSearch} statuses={statuses}/>
    <br/>
    <SearchResult invoices={invoices} statusLabel={statusLabel} onEdit={onEdit} showDeleteModal={showDeleteModal}/>
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
    <InvoiceDeleteModal {...deleteModal} onDelete={onDelete} onCancel={() => showDeleteModal({isShown: false})}/>
  </div>
);

InvoiceOverviewMarkup.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  showDeleteModal: PropTypes.func.isRequired,
  invoices: PropTypes.array,
  statuses: PropTypes.array.isRequired,
  statusLabel: PropTypes.func.isRequired,
  pagination: PropTypes.object.isRequired,
  deleteModal: PropTypes.object.isRequired
};

export default InvoiceOverviewMarkup;

