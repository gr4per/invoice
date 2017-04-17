import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { SEARCH_INVOICE_FORM } from '../../constants/forms';
import { renderSelect } from '../common/redux-form';
import { renderTextInput } from '../common/redux-form';

const SearchFrom = ({ onSearch, reset, statuses }, context) => {
  const renderActionToolbar = () => {
    return (
        <div className="form-submit text-right">
          <button className="btn btn-link" type="button"
            onClick={() => reset(SEARCH_INVOICE_FORM)}
          >
            {context.i18n.getMessage('Commands.reset')}
          </button>
          <button className="btn btn-primary" type="button" onClick={() => onSearch()}>
            {context.i18n.getMessage('Commands.search')}
          </button>
        </div>
    );
  };

  return (
    <div>
      <h1>{context.i18n.getMessage('Labels.header')}</h1>
      <div className="form-horizontal">
        <div className="row">
          <div className="col-md-6">
            <Field
              label="Labels.invoice"
              name='invoiceReceiptId'
              component={renderTextInput}
            />
            <Field
              label="Labels.status"
              name='statusId'
              component={renderSelect(
                statuses,
                (status) => (
                  <option key={status.statusId} value={status.statusId}>{status.description}</option>
                ),
                <option value="all" defaultValue={true}>{context.i18n.getMessage('Labels.all')}</option>
              )}
            />
          </div>
          <div className="col-md-6">
            <Field
              label="Labels.customer"
              name='customerId'
              component={renderTextInput}
            />
          </div>
        </div>
        {renderActionToolbar()}
      </div>
    </div>
  );
};

SearchFrom.propTypes = {
  onSearch: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  statuses: PropTypes.array.isRequired
};

SearchFrom.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default reduxForm({
  form: SEARCH_INVOICE_FORM
})(SearchFrom);
