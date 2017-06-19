import React, {PropTypes, Component} from 'react';
import Formsy from 'formsy-react';
import FormsyTextInput from '../../../common/form-components/FormsyTextInput.react';
import FormsyDateInput from '../../../common/form-components/FormsyDateInput.react';
import FormsyDateRange from '../../../common/form-components/FormsyDateRange.react';
import FormsySelect from '../../../common/form-components/FormsySelect.react';
import FormGroupMarkup from '../../../common/FormGroupMarkup/index';
import InvoiceHeaderStaticFields from './InvoiceHeaderStaticFields.react';
import _ from 'lodash';
import constraints from './InvoiceFormConstraints';
import { validateForm } from '../../../common/form-components/validateForm';
const validate = validateForm(constraints);

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
    supplierAddresses: PropTypes.array,
    supplierContacts: PropTypes.array,
    termsOfDelivery: PropTypes.array.isRequired,
    termsOfPayment: PropTypes.array.isRequired,
    methodsOfPayment: PropTypes.array.isRequired,
    currencies: PropTypes.array.isRequired,
    formHeader: PropTypes.string,
    onSave: PropTypes.func.isRequired
  };

  static defaultProps = {
    supplierAddresses: [],
    supplierContacts: []
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired
  };

  _mapInputs(inputs) {
    const model = _.transform(inputs, (result, value, key) => {
      if (key === 'periodOfService' && !_.isNil(value)) {
        result.periodOfServiceFrom = value.from;
        result.periodOfServiceTo = value.to;
      } else {
        result[key] = value;
      }
    }, {});
    return model;
  };

  _submitForm(model, resetForm, invalidateForm) {
    const errors = validate(model);
    _.isEmpty(errors) ? this.props.onSave(model, resetForm) : invalidateForm(errors);
  }

  render() {
    const {
      formHeader,
      customer,
      supplier,
      supplierAddresses,
      supplierContacts,
      invoice,
      statusLabel,
      termsOfPayment,
      methodsOfPayment,
      termsOfDelivery,
      currencies,
      onCancel
    } = this.props;
    return (
      <Formsy.Form onSubmit={::this._submitForm}
                   validationErrors={this.state.validationErrors}
                   mapping={this._mapInputs}
                   onChange={(currentValues) => this.setState({validationErrors: validate(currentValues)})}>
        {formHeader && <h1>{formHeader}</h1>}
        <div className="form-horizontal">
          <div className="row">
            <div className="col-md-6">
              <InvoiceHeaderStaticFields
                supplier={supplier}
                supplierAddresses={supplierAddresses}
                supplierContacts={supplierContacts}
                customer={customer}
              />
              <FormsyTextInput
                label="Labels.extInvoiceReceiptId"
                name='extInvoiceReceiptId'
                required={true}
                value={this.props.invoice.extInvoiceReceiptId}
              />
              <FormsyDateInput
                label="Labels.invoiceDate"
                name='invoiceDate'
                required={true}
                value={invoice.invoiceDate}
              />
              <FormsyDateRange
                label="Labels.periodOfService"
                name="periodOfService"
                value={{from: invoice.periodOfServiceFrom, to: invoice.periodOfServiceTo}}
              />
            </div>
            <div className="col-md-6">
              <FormGroupMarkup label="Labels.status">
                <span className="label label-default">
                  <nobr>
                    {statusLabel(invoice.statusId)}
                  </nobr>
                </span>
              </FormGroupMarkup>
              <FormsyTextInput
                label="Labels.accountingRecordId"
                name='accountingRecordId'
                value={invoice.accountingRecordId}
              />
              <FormsyTextInput
                label="Labels.referenceInformation"
                name='referenceInformation'
                value={invoice.referenceInformation}
              />
              <FormsyDateInput
                label="Labels.dueDate"
                name='dueDate'
                value={invoice.dueDate}
              />
              <FormsySelect
                label="Labels.termsOfPayment"
                name="termsOfPaymentId"
                required={true}
                value={invoice.termsOfPaymentId}
                values={termsOfPayment}
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
                required={true}
                value={invoice.methodOfPaymentId}
                values={methodsOfPayment}
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
                value={invoice.termsOfDeliveryId}
                values={termsOfDelivery}
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
                value={invoice.commentary}
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
                required={true}
                value={invoice.currencyId}
                values={currencies}
                toOptionConverter={
                  (currency) => (
                    <option key={`currency-${currency.id}`} value={currency.id}>
                      {currency.name}
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
                value={invoice.orderNumber}
              />
            </div>
          </div>
          <div className="form-submit text-right">
            {onCancel ? (
              <button className="btn btn-link" type="button" onClick={() => onCancel()}>
                {this.context.i18n.getMessage('Commands.cancel')}
              </button>
            ) : null}
            <button className="btn btn-primary" type="submit">{this.context.i18n.getMessage('Commands.save')}</button>
          </div>
        </div>
      </Formsy.Form>
    )
  }
}
