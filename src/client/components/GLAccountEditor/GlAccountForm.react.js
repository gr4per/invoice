import React, { PropTypes, PureComponent } from 'react';
import Formsy from 'formsy-react';
import FormsyTextInput from './input-components/FormsyTextInput.react';
import FormsyDateRange from './input-components/FormsyDateRange.react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import validate from 'validate.js';

const defaultFormValue = {
  customerId: '',
  id: '',
  accountType: '',
  shortDescription: '',
  validRange: {}
};

const constraints = {
  "id": {
    presence: {
      message: "^GlAccount.isRequired"
    }
  },

  "customerId": {
    presence: {
      message: "^GlAccount.isRequired"
    }
  },
};


export default class GlAccountForm extends PureComponent {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    formHeader: PropTypes.string,
    formValue: PropTypes.object,
    mode: PropTypes.oneOf(['edit', 'create'])
  };

  state = {
    validationErrors: {},
    disableSubmitButton: false
  };

  static defaultProps = {
    formValue: defaultFormValue
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired
  };

  validateForm(values) {
    this.setState({validationErrors:_.mapValues(validate(values, constraints), (errors) => {
      return this.context.i18n.getMessage(errors[0]);
    })})
  }

  render() {
    const { i18n } = this.context;
    const {onCancel, onSubmit, formHeader, formValue, mode} = this.props;
    return (
      <Formsy.Form
        onValidSubmit={(data, resetForm, invalidateForm) => {
          onSubmit(data).catch((response) => {
            if(response.body.errors[0].field === 'PRIMARY') {
              invalidateForm({id: i18n.getMessage('GlAccount.isUnique')})
            }
          })
        }}
        onInvalid={() => (this.setState({disableSubmitButton: true}))}
        onValid={() => (this.setState({disableSubmitButton: false}))}
        ref="glAccountForm"
        mapping={(inputs) => ({
          ..._.omit(inputs, 'validRange'),
          validFrom: inputs.validRange.from,
          validTo: inputs.validRange.to
        })}
        onChange={::this.validateForm}
        validationErrors={this.state.validationErrors}

      >
        {formHeader && <h1>{formHeader}</h1>}
        <div className="form-horizontal">
          <div className="row">
            <div className="col-md-6">
              <FormsyTextInput disabled={mode === 'edit'} required label={i18n.getMessage('GlAccount.customerId')} name="customerId" value={formValue.customerId}/>
              <FormsyTextInput disabled={mode === 'edit'} required label={i18n.getMessage('GlAccount.id')} name="id" value={formValue.id}/>
              <FormsyTextInput label={i18n.getMessage('GlAccount.accountType')} name="accountType" value={formValue.accountType}/>
            </div>
            <div className="col-md-6">
              <FormsyTextInput label={i18n.getMessage('GlAccount.shortDescription')} name="shortDescription" value={formValue.shortDescription}/>
              <FormsyDateRange label={i18n.getMessage('GlAccount.validRange')} name="validRange" value={{from: formValue.validFrom, to: formValue.validTo}}/>
            </div>
          </div>
          <div className="form-submit form-submit text-right">
            <Button type="reset" bsStyle="link" onClick={()=>(this.refs.glAccountForm.reset(defaultFormValue))}>{i18n.getMessage('GlAccount.reset')}</Button>
            <Button bsStyle="default" onClick={onCancel}>{i18n.getMessage('GlAccount.cancelButton')}</Button>
            <Button type="submit" bsStyle="primary" disabled={this.state.disableSubmitButton}>{i18n.getMessage('GlAccount.save')}</Button>
          </div>
        </div>
      </Formsy.Form>
    );
  }
}
