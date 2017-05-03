import React from 'react';
import { Route } from 'react-router';
import Layout from '../containers/Layout.react';
import InvoiceOverview from '../containers/InvoiceOverview.react';
import EditInvoice from '../containers/EditInvoice.react';
import InvoicePositions from '../containers/InvoicePositions.react';
import CreateInvoice from '../containers/CreateInvoice.react';
import InvoiceImport from '../containers/InvoiceImport.react';

export default (pathPrefix) => {
  return (
    <Route component={Layout}>
      <Route path="/invoice/" component={InvoiceOverview}/>
      <Route path="/invoice/create" component={CreateInvoice}/>
      <Route path="/invoice/edit/:id/items" component={InvoicePositions}/>
      <Route path="/invoice/import" component={InvoiceImport}/>
    </Route>
  );
}
