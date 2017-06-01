import React, { Component, PropTypes } from 'react';
import FormGroupMarkup from '../../../../common/FormGroupMarkup/index';
import DateInput from 'opuscapita-react-dates/lib/DateInput';
import I18nLinker from 'opuscapita-react-dates/lib/I18nLinker';
import {Decorator as FormsyElement} from 'formsy-react';

@FormsyElement()
export default class FormsyDateInput extends Component {

  render() {
    return (
      <FormGroupMarkup error={this.props.isPristine() ? '' : this.props.getErrorMessage()} label={this.props.label} required={this.props.required}>
        <I18nLinker>
          <DateInput value={this.props.getValue()}
                     onChange={(value) => this.props.setValue(value)}
                     onBlur={(e) => this.props.isPristine() && this.props.setValue(this.props.getValue())}
          />
        </I18nLinker>
      </FormGroupMarkup>
    )
  }
};
