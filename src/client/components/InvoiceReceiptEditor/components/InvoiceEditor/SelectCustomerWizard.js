import React, { PropTypes, Component } from 'react';
import FormsyTextInput from '../../../common/form-components/FormsyTextInput.react';
import FormsySelect from '../../../common/form-components/FormsySelect.react';
import constraints from './SelectCustomerWizardConstraints';
import { validateForm } from '../../../common/form-components/validateForm';
const validate = validateForm(constraints);

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
    customers: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    customers: []
  };

  _submitForm(model, resetForm, invalidateForm) {
    const errors = validate(model);
    _.isEmpty(errors) ? this.props.onSubmit(model.customerId, resetForm) : invalidateForm(errors);
  }

  render() {
    return (
      <div>
        <h1>{this.context.i18n.getMessage('CreateInvoice.header')}</h1>
        <div className="form-horizontal">
          <Formsy.Form onSubmit={::this._submitForm}
                       validationErrors={this.state.validationErrors}
                       onChange={(currentValues) => this.setState({validationErrors: validate(currentValues)})}>
            <div className="row">
              <div className="col-md-6">
                <FormsySelect
                  label="CreateInvoice.customer"
                  name="customerId"
                  required={true}
                  values={this.props.customers}
                  value={this.props.customers[0].id}
                  toOptionConverter={
                    (customer) => (
                      <option key={customer.id} value={customer.id}>
                        {customer.customerName ? `${customer.customerName} (${customer.id})` : customer.id}
                      </option>
                    )
                  }
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
