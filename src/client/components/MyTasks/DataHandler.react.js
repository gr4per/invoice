import React from 'react';

import mockInvoice from './data/invoice';
import ModelUtils from './models/Utils';


export default function withDataHandler(WrappedComponent) {
  class DataHandler extends React.Component {

    render() {
      const queue = ModelUtils.flattenQueueResponse(
        require('./data/queue.json'));
      const invoice = mockInvoice(1);

      return (
        <WrappedComponent
          list={queue}
          invoice={invoice}
          getInvoice={() => {}}
        />
      );
    }
  }

  return DataHandler;
}
