import React from 'react';
import SearchResult from './SearchResult.react'
import SearchForm from './SearchForm.react';

export default ({onSearch, onEdit, invoices, statuses}) => {
  return(
    <div>
      <SearchForm onSearch={onSearch} statuses={statuses}/>
      <br/>
      <SearchResult invoices={invoices}  statuses={statuses} onEdit={onEdit}/>
    </div>
  );
};

