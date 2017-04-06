import React, { PropTypes, Component } from 'react';
import { Fields } from 'redux-form';
import DatePicker from '../Datepicker/DatePicker.react';
import _ from 'lodash';

const renderDateRange = (fields) => {
  const { label, fromFieldName, toFieldName, locale, dateFormat } = fields;
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
          <DatePicker
            {..._.get(fields, fromFieldName).input}
            className="form-control"
            showIcon={false}
            name={fromFieldName}
            format={dateFormat}
            locale={locale}
          />
          <span className="input-group-addon">—</span>
          <DatePicker
            {..._.get(fields, toFieldName).input}
            className="form-control"
            showIcon={false}
            name={toFieldName}
            format={dateFormat}
            locale={locale}
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
      parse={(value, name) => {
        return context.i18n.parseDate(value)
      }}
      format={(value, name) => {
        return context.i18n.formatDate(value)
      }}
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
