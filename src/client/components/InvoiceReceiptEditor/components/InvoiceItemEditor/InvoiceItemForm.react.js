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

  constructor(props) {
    super(props);
    this.state = {
      validationErrors: {}
    };
  }

  static propTypes = {
    item: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
  };

  static defaultProps = {
    item: {},
    unitsOfMeasure: []
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired,
    unitsOfMeasure: PropTypes.array
  };

  _submitForm(model, resetForm, invalidateForm) {
    const errors = validate(model);
    _.isEmpty(errors) ? this.props.onSave(model, resetForm) : invalidateForm(errors);
  }

  render() {
    return (
      <div>
        <h1>
          {this.context.i18n.getMessage('Labels.irPositions')}
        </h1>
        <div className="form-horizontal">
          <Formsy.Form onSubmit={::this._submitForm}
                       validationErrors={this.state.validationErrors}
                       onChange={(currentValues) => this.setState({validationErrors: validate(currentValues)})}>
            <div className="row">
              <div className="col-md-6">
                <FormsyTextInput
                  label='Labels.productId'
                  name='productId'
                  value={this.props.item.productId || ''}
                />
                <FormsyTextInput
                  label="Labels.productDescShort"
                  name='productDescShort'
                  required={true}
                  value={this.props.item.productDescShort || ''}
                />
                <FormsyTextInput
                  label="Labels.quantity"
                  name='quantity'
                  required={true}
                  value={this.props.item.quantity || ''}
                />
                <FormsySelect
                  label="Labels.uom"
                  name='uomId'
                  required={true}
                  value={this.props.item.uomId || ''}
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
                  value={this.props.item.netPrice || ''}
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
                  value={this.props.item.extProductId || ''}
                />
                <FormsyTextInput
                  label='Labels.taxRate'
                  name='taxPercentage'
                  value={this.props.item.taxPercentage || ''}
                />
                <FormsyTextInput
                  label='Labels.totalNetPrice'
                  name='totalNetPrice'
                  value={this.props.item.totalNetPrice || ''}
                />
                <FormsyTextInput
                  label='Labels.taxAmount'
                  name='taxAmount'
                  disabled={true}
                  value={this.props.item.taxAmount || ''}
                />
                <FormsyTextInput
                  label='Labels.totalGrossPrice'
                  name='totalGrossPrice'
                  value={this.props.item.totalGrossPrice || ''}
                />
              </div>
            </div>
            <div className="form-submit text-right">
              <Button className="pull-left" onClick={this.props.onBack}>{this.context.i18n.getMessage('Commands.backtoInvoice')}</Button>
              <Button bsStyle="primary" type="submit">{this.context.i18n.getMessage('Commands.addNewPosition')}</Button>
            </div>
          </Formsy.Form>
        </div>
      </div>
    );
  }
};
