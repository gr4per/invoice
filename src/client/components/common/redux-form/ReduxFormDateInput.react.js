import React, {PropTypes} from 'react';
import { Field } from 'redux-form';
import renderDateInput from './renderDateInput';

const ReduxFormDateInput = (props, context) => {
  return(
    <Field
      label={props.label}
      name={props.name}
      required={props.required}
      component={renderDateInput}
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

ReduxFormDateInput.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default ReduxFormDateInput;
