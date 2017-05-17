import React, { PropTypes, Component } from 'react';
import { Fields } from 'redux-form';
import renderDateRange from './renderDateRange';
import { parseDate } from './parseDate';

const ReduxFormDateRange = (props) => {
  return(
    <Fields
      label={props.label}
      names={[props.fromFieldName, props.toFieldName]}
      fromFieldName={props.fromFieldName}
      toFieldName={props.toFieldName}
      required={props.required}
      component={renderDateRange}
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

export default ReduxFormDateRange;
