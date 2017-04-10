import React from 'react';
import FormGroupMarkup from '../FormGroupMarkup';
import { FormControl } from 'react-bootstrap';

/**
 * Text input renderer for redux forms
 *
 * @param field
 */
const renderTextInput = (field) => {
  const { meta: { touched, error } } = field;
  let hasError = !_.isEmpty(error) && touched;
  return (
    <FormGroupMarkup errors={hasError ? error : undefined} label={field.label} required={field.required}>
      <FormControl
        {...field.input}
        disabled={field.disabled}
        componentClass={field.componentClass ? field.componentClass : 'input'}
      />
    </FormGroupMarkup>
  );
};

export default renderTextInput;
