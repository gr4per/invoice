import React from 'react';
import FormGroupMarkup from '../FormGroupMarkup';
import { FormControl } from 'react-bootstrap';

/**
 * Returns function that renders select for redux-forms
 *
 * @param values - array of values
 * @param toOptionConverter - function that converts values[i] to <option> jsx
 * @param defaultOption - <option> jsx that will be uses as a default options (if passed)
 * @return {function(*): XML}
 */
const renderSelect = (values, toOptionConverter, defaultOption = null) => {
  return (field) => (
    <FormGroupMarkup label={field.label} required={field.required}>
      <FormControl componentClass="select" {...field.input}>
        {defaultOption ? defaultOption : null}
        {values.map(toOptionConverter)}
      </FormControl>
    </FormGroupMarkup>
  );
};

export default renderSelect;
