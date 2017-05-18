import React, {PropTypes} from 'react';
import { Field } from 'redux-form';
import renderDateInput from './renderDateInput';
import { parseDate } from './parseDate';

const ReduxFormDateInput = (props) => {
  return(
    <Field
      label={props.label}
      name={props.name}
      required={props.required}
      component={renderDateInput}
      format={(value, name) => (parseDate(value))}
    />
  );
};

export default ReduxFormDateInput;
