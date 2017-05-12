import React from 'react';
import FormGroupMarkup from '../FormGroupMarkup';
import DateInput from 'opuscapita-react-dates/lib/DateInput';

const renderDateInput = (field) => {
  const { meta: { touched, error } } = field;

  return (
    <FormGroupMarkup error={error && touched ? error : undefined} label={field.label} required={field.required}>
      <DateInput value={field.input.value}
                 dateFormat={field.dateFormat}
                 locale={field.locale}
                 onChange={field.input.onChange}
                 onBlur={(e) => {field.input.onBlur(); e.preventDefault();}}
                 onFocus={field.input.onFocus}
      />
    </FormGroupMarkup>
  );
};

export default renderDateInput;
