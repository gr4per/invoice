import React from 'react';
import InvoiceOverview from './components/InvoiceOverview';
import InvoiceEditor from './components/InvoiceEditor';
import InvoiceItemEditor from './components/InvoiceItemEditor';

const InvoiceCreator = (props) => (
  <InvoiceEditor {...props} createMode={true}/>
);

export { InvoiceOverview, InvoiceEditor, InvoiceCreator, InvoiceItemEditor };
