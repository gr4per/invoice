import React, { Component, PropTypes } from 'react';
import FormGroupMarkup from '../FormGroupMarkup/index';
import DateRangeInput from 'opuscapita-react-dates/lib/DateRangeInput';
import I18nLinker from 'opuscapita-react-dates/lib/I18nLinker';
import {Decorator as FormsyElement} from 'formsy-react';
import { parseDate } from './parseDate';

@FormsyElement()
export default class FormsyDateRange extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.object
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired
  };

  static defaultProps = {
    required: false
  };

  render() {
    let fromToValue = this.props.getValue(); //should be an object {from: Date/String, to: Date/String}
    return (
      <FormGroupMarkup error={this.props.isPristine() ? null : this.props.getErrorMessage()} label={this.props.label} required={this.props.required}>
        <I18nLinker>
          <DateRangeInput
            value={fromToValue.from ? [
              parseDate(fromToValue.from),
              parseDate(fromToValue.to)
            ] : []}
            onChange={(values) => this.props.setValue({from: values[0], to: values[1]})}
            onBlur={(e) => this.props.isPristine() && this.props.setValue(this.props.getValue())}
            variants={[]}
          />
        </I18nLinker>
      </FormGroupMarkup>
    )
  }
};
