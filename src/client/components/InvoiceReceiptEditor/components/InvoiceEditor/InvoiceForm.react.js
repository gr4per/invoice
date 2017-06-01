import React, {PropTypes, Component} from 'react';
import Formsy from 'formsy-react';
import FormsyTextInput from '../common/formsy-components/FormsyTextInput.react';
import FormsyDateInput from '../common/formsy-components/FormsyDateInput.react';
import FormsyDateRange from '../common/formsy-components/FormsyDateRange.react';
import FormsySelect from '../common/formsy-components/FormsySelect.react';
import { parseDate } from '../../../common/redux-form/parseDate';
import FormGroupMarkup from '../../../common/FormGroupMarkup/index';
import InvoiceHeaderStaticFields from './InvoiceHeaderStaticFields.react';
import validate from 'validate.js';
import constraints from './InvoiceFormConstraints';
import _ from 'lodash';

export default class InvoiceForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validationErrors: {}
    };
  }

  static propTypes = {
    invoice: PropTypes.object.isRequired,
    customer: PropTypes.object.isRequired,
    supplier: PropTypes.object.isRequired,
    termsOfDelivery: PropTypes.array.isRequired,
    termsOfPayment: PropTypes.array.isRequired,
    methodsOfPayment: PropTypes.array.isRequired,
    currencies: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired
  };

  _mapInputs(inputs) {
    const model = _.transform(inputs, (result, value, key) => {
      if (key === 'periodOfService') {
        result.periodOfServiceFrom = value[0];
        result.periodOfServiceTo = value[1];
      } else {
        result[key] = value !== '' ? value : null;
      }
    }, {});
    return model;
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
    _.isEmpty(errors) ? this.props.onSave(model, resetForm) : invalidateForm(errors);
  }

  render() {
    return (
      <div className="form-horizontal">
        <Formsy.Form onSubmit={(model, resetForm, invalidateForm) => this._submitForm(model, resetForm, invalidateForm)}
                     validationErrors={this.state.validationErrors}
                     mapping={this._mapInputs}
                     onChange={(currentValues) => this.setState({validationErrors: this._validateForm(currentValues)})}>
          <div className="row">
            <div className="col-md-6">
              <InvoiceHeaderStaticFields supplier={this.props.supplier} customer={this.props.customer}/>
              <FormsyTextInput
                label="Labels.extInvoiceReceiptId"
                name='extInvoiceReceiptId'
                required={true}
                value={this.props.invoice.extInvoiceReceiptId || ''}
              />
              <FormsyDateInput
                label="Labels.invoiceDate"
                name='invoiceDate'
                required={true}
                value={parseDate(this.props.invoice.invoiceDate)}
              />
              <FormsyDateRange
                label="Labels.periodOfService"
                name="periodOfService"
                value={[
                  parseDate(this.props.invoice.periodOfServiceFrom),
                  parseDate(this.props.invoice.periodOfServiceTo)
                ]}
              />
            </div>
            <div className="col-md-6">
              <FormGroupMarkup label="Labels.status">
                <span className="label label-default">
                  <nobr>
                    {this.props.statusLabel(this.props.invoice.statusId)}
                  </nobr>
                </span>
              </FormGroupMarkup>
              <FormsyTextInput
                label="Labels.accountingRecordId"
                name='accountingRecordId'
                required={true}
                value={this.props.invoice.accountingRecordId || ''}
              />
              <FormsyTextInput
                label="Labels.referenceInformation"
                name='referenceInformation'
                required={true}
                value={this.props.invoice.referenceInformation || ''}
              />
              <FormsyDateInput
                label="Labels.dueDate"
                name='dueDate'
                required={true}
                value={parseDate(this.props.invoice.dueDate)}
              />
              <FormsySelect
                label="Labels.termsOfPayment"
                name="termsOfPaymentId"
                value={this.props.invoice.termsOfPaymentId || ''}
                values={this.props.termsOfPayment}
                toOptionConverter={
                  (tod) => (
                    <option key={`term-of-payment-${tod.id}`} value={tod.id}>
                      {tod.description ? tod.description : tod.id}
                    </option>
                  )
                }
                defaultOption={<option value="" defaultValue={true}/>}
              />
              <FormsySelect
                label="Labels.methodOfPayment"
                name="methodOfPaymentId"
                value={this.props.invoice.methodOfPaymentId || ''}
                values={this.props.methodsOfPayment}
                toOptionConverter={
                  (mop) => (
                    <option key={`method-of-payment-${mop.id}`} value={mop.id}>
                      {mop.description}
                    </option>
                  )
                }
                defaultOption={<option value="" defaultValue={true}/>}
              />
              <FormsySelect
                label="Labels.termsOfDelivery"
                name="termsOfDeliveryId"
                value={this.props.invoice.termsOfDeliveryId || ''}
                values={this.props.termsOfDelivery}
                toOptionConverter={
                  (tod) => (
                    <option key={`term-of-delivery-${tod.id}`} value={tod.id}>
                      {tod.description}
                    </option>
                  )
                }
                defaultOption={<option value="" defaultValue={true}/>}
              />
              <FormsyTextInput
                label="Labels.comment"
                name='commentary'
                required={true}
                value={this.props.invoice.commentary || ''}
                componentClass="textarea"
              />
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-6">
              <FormsySelect
                label="Labels.currency"
                name="currencyId"
                value={this.props.invoice.currencyId || ''}
                values={this.props.currencies}
                toOptionConverter={
                  (currency) => (
                    <option key={`currency-${currency.id}`} value={currency.id}>
                      {currency.description}
                    </option>
                  )
                }
                defaultOption={<option value="" defaultValue={true}/>}
              />
            </div>
            <div className="col-md-6">
              <FormsyTextInput
                label="Labels.orderNumber"
                name='orderNumber'
                required={true}
                value={this.props.invoice.orderNumber || ''}
              />
            </div>
          </div>
          <div className="form-submit text-right">
            {this.props.onCancel ? (
              <button className="btn btn-link" type="button" onClick={() => this.props.onCancel()}>
                {this.context.i18n.getMessage('Commands.cancel')}
              </button>
            ) : null}
            <button className="btn btn-primary" type="submit">{this.context.i18n.getMessage('Commands.save')}</button>
          </div>
        </Formsy.Form>
      </div>
    )
  }
}
