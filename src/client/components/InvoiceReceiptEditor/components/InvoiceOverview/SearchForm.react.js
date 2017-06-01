import React, { PropTypes, Component } from 'react';
import FormsyTextInput from '../common/formsy-components/FormsyTextInput.react';
import FormsySelect from '../common/formsy-components/FormsySelect.react';
import _ from 'lodash';

export default class SearchForm extends Component {

  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    statuses: PropTypes.array.isRequired
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired
  };

  getSearchParameters() {
    return this.refs.search.getModel();
  }

  _mapInputs(inputs) {
    return _.omitBy(inputs, (value, key) => (_.isNil(value) || value === ''));
  }

  render() {
    return (
      <div>
        <h1>{this.context.i18n.getMessage('Labels.header')}</h1>
        <div className="form-horizontal">
          <Formsy.Form ref="search" onSubmit={(model) => this.props.onSearch(model)} mapping={this._mapInputs}>
            <div className="row">
              <div className="col-md-6">
                <FormsyTextInput
                  label="Labels.invoice"
                  name='invoiceReceiptId'
                  value={''}
                />
                <FormsySelect
                  label="Labels.status"
                  name='statusId'
                  value={''}
                  values={this.props.statuses}
                  toOptionConverter={
                    (status) => (
                      <option key={status.statusId} value={status.statusId}>{status.description}</option>
                    )
                  }
                  defaultOption={<option value="" defaultValue={true}>{this.context.i18n.getMessage('Labels.all')}</option>}
                />
              </div>
              <div className="col-md-6">
                <FormsyTextInput
                  label="Labels.customer"
                  name='customerId'
                  value={''}
                />
              </div>
            </div>
            <div className="form-submit text-right">
              <button className="btn btn-link" type="button"
                      onClick={() => this.refs.search.reset()}
              >
                {this.context.i18n.getMessage('Commands.reset')}
              </button>
              <button className="btn btn-primary" type="submit">
                {this.context.i18n.getMessage('Commands.search')}
              </button>
            </div>
          </Formsy.Form>
        </div>
      </div>
    );
  }
};
