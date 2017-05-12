import React, {PropTypes} from 'react';
import { Field } from 'redux-form';
import renderDateInput from './renderDateInput';
import { parseDate } from './parseDate';

const ReduxFormDateInput = (props, context) => {
  return(
    <Field
      label={props.label}
      name={props.name}
      required={props.required}
      component={renderDateInput}
      dateFormat={context.i18n.dateFormat}
      locale={context.i18n.locale}
      format={(value, name) => (parseDate(value))}
    />
  );
};

ReduxFormDateInput.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default ReduxFormDateInput;
