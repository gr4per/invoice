import React, { PropTypes, Component } from 'react';
import FormsyTextInput from '../common/formsy-components/FormsyTextInput.react';
import validate from 'validate.js';
import constraints from './SelectCustomerWizardConstraints';

export default class SelectCustomerWizard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validationErrors: {}
    };
  }

  static contextTypes = {
    i18n: PropTypes.object.isRequired
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  _validateForm(values) {
    const validationResult = {};
    _.forEach(validate(values, constraints), (value, key) => {
      _.set(validationResult, key, value[0])
    });
    return validationResult;
  }

  _submitForm(model, resetForm, invalidateForm) {
    const errors = this._validateForm(model);
    _.isEmpty(errors) ? this.props.onSubmit(model.customerId, resetForm) : invalidateForm(errors);
  }

  render() {
    return (
      <div>
        <h1>{this.context.i18n.getMessage('CreateInvoice.header')}</h1>
        <div className="form-horizontal">
          <Formsy.Form onSubmit={(model, resetForm, invalidateForm) => this._submitForm(model, resetForm, invalidateForm)}
                       validationErrors={this.state.validationErrors}
                       onChange={(currentValues) => this.setState({validationErrors: this._validateForm(currentValues)})}>
            <div className="row">
              <div className="col-md-6">
                <FormsyTextInput
                  label="CreateInvoice.customer"
                  name='customerId'
                  value={''}
                  required={true}
                />
              </div>
            </div>
            <div className="form-submit text-right">
              <button type="submit">{this.context.i18n.getMessage('CreateInvoice.next')}</button>
            </div>
          </Formsy.Form>
        </div>
      </div>
    );
  }
};
