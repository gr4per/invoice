import React, { Component, PropTypes } from 'react';
import FormGroupMarkup from '../FormGroupMarkup/index';
import DateInput from 'opuscapita-react-dates/lib/DateInput';
import I18nLinker from 'opuscapita-react-dates/lib/I18nLinker';
import { Decorator as FormsyElement } from 'formsy-react';
import { parseDate } from './parseDate';

@FormsyElement()
export default class FormsyDateInput extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)
    ]),
    isPristine: PropTypes.func.isRequired,
    getErrorMessage: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired
  };

  static defaultProps = {
    required: false
  };

  render() {
    return (
      <FormGroupMarkup
        error={this.props.isPristine() ? null : this.props.getErrorMessage()}
        label={this.props.label}
        required={this.props.required}
      >
        <I18nLinker>
          <DateInput value={parseDate(this.props.getValue())}
            onChange={(value) => this.props.setValue(value || undefined)}
            onBlur={(e) => this.props.isPristine() && this.props.setValue(this.props.getValue())}
          />
        </I18nLinker>
      </FormGroupMarkup>
    )
  }
}
