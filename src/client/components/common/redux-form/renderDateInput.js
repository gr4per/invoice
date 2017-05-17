import React from 'react';
import FormGroupMarkup from '../FormGroupMarkup';
import DateInput from 'opuscapita-react-dates/lib/DateInput';
import I18nLinker from 'opuscapita-react-dates/lib/I18nLinker';

const renderDateInput = (field) => {
  const { meta: { touched, error } } = field;

  return (
    <FormGroupMarkup error={error && touched ? error : undefined} label={field.label} required={field.required}>
      <I18nLinker>
        <DateInput value={field.input.value}
                   onChange={field.input.onChange}
                   onBlur={(e) => {field.input.onBlur(); e.preventDefault();}}
                   onFocus={field.input.onFocus}
        />
      </I18nLinker>
    </FormGroupMarkup>
  );
};

export default renderDateInput;
