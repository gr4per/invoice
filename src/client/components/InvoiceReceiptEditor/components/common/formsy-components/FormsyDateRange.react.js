import React, { Component, PropTypes } from 'react';
import FormGroupMarkup from '../../../../common/FormGroupMarkup/index';
import DateRangeInput from 'opuscapita-react-dates/lib/DateRangeInput';
import I18nLinker from 'opuscapita-react-dates/lib/I18nLinker';
import {Decorator as FormsyElement} from 'formsy-react';

@FormsyElement()
export default class FormsyDateRange extends Component {

  render() {
    return (
      <FormGroupMarkup error={this.props.isPristine() ? '' : this.props.getErrorMessage()} label={this.props.label} required={this.props.required}>
        <I18nLinker>
          <DateRangeInput
            value={this.props.getValue()}
            onChange={(value) => this.props.setValue(value)}
            onBlur={(e) => this.props.isPristine() && this.props.setValue(this.props.getValue())}
            variants={[]}
          />
        </I18nLinker>
      </FormGroupMarkup>
    )
  }
};
