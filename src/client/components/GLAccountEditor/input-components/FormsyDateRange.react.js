import React, {PropTypes, Component} from 'react';
import {Decorator as FormsyElement} from 'formsy-react';
import FormGroupMarkup from '../../common/FormGroupMarkup';
import DateRangeInput from 'opuscapita-react-dates/lib/DateRangeInput';
import I18nLinker from 'opuscapita-react-dates/lib/I18nLinker';
import _ from 'lodash';

/**
 * Produces Date instance from the passed value
 *
 * @param value - value to parse
 * @return {Date} - Date instance
 * @throws {Error} - 'Invalid date format' if value couldn't be converted to Date
 */
export const parseDate = (value) => {
  let dateValue = value;
  if (_.isNil(value) || (_.isString(value) && _.isEmpty(value))) {
    dateValue = null;
  } else if (!(value instanceof Date)) {
    const timestamp = Date.parse(value);
    if (isNaN(timestamp)) {
      throw new Error('Invalid date format');
    } else {
      dateValue = new Date(timestamp);
    }
  }
  return dateValue;
};


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
    let fromToValue = this.props.getValue(); //should be an object {from: Date, to: Date}
    return(
      <FormGroupMarkup label={this.props.label} required={this.props.required}>
        <I18nLinker>
          <DateRangeInput
            value={fromToValue.from ? [
              parseDate(fromToValue.from),
              parseDate(fromToValue.to)
            ] : []}
            onChange={(values) => {
              this.props.setValue({from: values[0], to: values[1]})}
            }
            variants={[]}
          />
        </I18nLinker>
      </FormGroupMarkup>
    );
  }
}
