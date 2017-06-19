import React, { PropTypes, Component } from 'react';
import Formsy from 'formsy-react';
import FormsyTextInput from '../../../common/form-components/FormsyTextInput.react'
import FormsySelect from '../../../common/form-components/FormsySelect.react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import constraints from './InvoiceItemFormConstraints';
import { validateForm } from '../../../common/form-components/validateForm';
const validate = validateForm(constraints);

export default class InvoiceItemForm extends Component {

  static propTypes = {
    item: PropTypes.object,
    unitsOfMeasure: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired,
    unitsOfMeasure: PropTypes.array
  };

  static defaultProps = {
    item: {},
    unitsOfMeasure: []
  };

  constructor(props) {
    super(props);
    this.state = {
      validationErrors: {}
    };
  }

  _submitForm(model, resetForm, invalidateForm) {
    const errors = validate(model);
    if (_.isEmpty(errors)) {
      this.props.onSave(model, resetForm);
    } else {
      invalidateForm(errors);
    }
  }

  render() {
    const { item } = this.props;
    return (
      <div>
        <h1>
          {this.context.i18n.getMessage('Labels.irPositions')}
        </h1>
        <div className="form-horizontal">
          <Formsy.Form onSubmit={::this._submitForm}
            validationErrors={this.state.validationErrors}
            onChange={(currentValues) => this.setState({ validationErrors: validate(currentValues) })}
          >
            <div className="row">
              <div className="col-md-6">
                <FormsyTextInput
                  label='Labels.productId'
                  name='productId'
                  value={item.productId || ''}
                />
                <FormsyTextInput
                  label="Labels.productDescShort"
                  name='productDescShort'
                  required={true}
                  value={item.productDescShort || ''}
                />
                <FormsyTextInput
                  label="Labels.quantity"
                  name='quantity'
                  required={true}
                  value={item.quantity || ''}
                />
                <FormsySelect
                  label="Labels.uom"
                  name='uomId'
                  required={true}
                  value={item.uomId || ''}
                  values={this.props.unitsOfMeasure}
                  toOptionConverter={
                    (uom) => (
                      <option key={`term-of-payment-${uom.id}`} value={uom.id}>
                        {uom.description ? uom.description : uom.id}
                      </option>
                    )
                  }
                  defaultOption={<option value="" defaultValue={true}/>}
                />
                <FormsyTextInput
                  label="Labels.netPrice"
                  name='netPrice'
                  required={true}
                  value={item.netPrice}
                />
                <FormsyTextInput
                  label="Labels.priceUnit"
                  name='priceUnit'
                  required={true}
                  value={this.props.item.priceUnit || ''}
                />
              </div>
              <div className="col-md-6">
                <FormsyTextInput
                  label='Labels.ean'
                  name='extProductId'
                  value={item.extProductId}
                />
                <FormsyTextInput
                  label='Labels.taxRate'
                  name='taxPercentage'
                  value={item.taxPercentage}
                />
                <FormsyTextInput
                  label='Labels.totalNetPrice'
                  name='totalNetPrice'
                  value={item.totalNetPrice}
                />
                <FormsyTextInput
                  label='Labels.taxAmount'
                  name='taxAmount'
                  disabled={true}
                  value={item.taxAmount}
                />
                <FormsyTextInput
                  label='Labels.totalGrossPrice'
                  name='totalGrossPrice'
                  value={item.totalGrossPrice}
                />
              </div>
            </div>
            <div className="form-submit text-right">
              <Button className="pull-left"
                onClick={this.props.onBack}
              >{this.context.i18n.getMessage('Commands.backtoInvoice')}</Button>
              <Button bsStyle="primary" type="submit">{this.context.i18n.getMessage('Commands.addNewPosition')}</Button>
            </div>
          </Formsy.Form>
        </div>
      </div>
    );
  }
}
