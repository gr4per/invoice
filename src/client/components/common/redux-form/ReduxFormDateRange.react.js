import React, { PropTypes, Component } from 'react';
import { Fields } from 'redux-form';
import _ from 'lodash';
import DateRangeInput from 'opuscapita-react-dates/lib/DateRangeInput';
import { parseDate } from './parseDate';

const renderDateRange = (fields) => {
  const { label, fromFieldName, toFieldName, locale, dateFormat } = fields;
  const fromFieldInput = _.get(fields, fromFieldName).input;
  const toFieldInput = _.get(fields, toFieldName).input;
  // let fromHasError = !_.isEmpty(fields[fromFieldName].meta.error) && fields[fromFieldName].meta.touched;
  // let toHasError = !_.isEmpty(fields[toFieldName].meta.error) && fields[toFieldName].meta.touched;

  return (
    <div className={`form-group`}>
      <div className="col-sm-5">
        <label className="control-label">
          {label}
        </label>
      </div>
      <div className="col-sm-7">
        <div className="input-daterange input-group">
          <DateRangeInput
            dateFormat={dateFormat}
            locale={locale}
            value={[fromFieldInput.value, toFieldInput.value]}
            onChange={(value) => { fromFieldInput.onChange(value[0]); toFieldInput.onChange(value[1]); }}
          />
        </div>
      </div>
    </div>
  );
};

const ReduxFormDateRange = (props, context) => {
  return(
    <Fields
      label={context.i18n.getMessage(props.label)}
      names={[props.fromFieldName, props.toFieldName]}
      fromFieldName={props.fromFieldName}
      toFieldName={props.toFieldName}
      required={props.required}
      component={renderDateRange}
      dateFormat={context.i18n.dateFormat}
      locale={context.i18n.locale}
      format={(value, name) => (parseDate(value))}
    />
  );
};

ReduxFormDateRange.propTypes = {
  label: PropTypes.string.isRequired,
  fromFieldName: PropTypes.string.isRequired,
  toFieldName: PropTypes.string.isRequired,
  required: PropTypes.bool
};

ReduxFormDateRange.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default ReduxFormDateRange;
