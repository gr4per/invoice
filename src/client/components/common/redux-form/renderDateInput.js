import React from 'react';
import DatePicker from '../Datepicker/DatePicker.react';
import FormGroupMarkup from '../FormGroupMarkup';

const renderDateInput = (field) => {
  const { meta: { touched, error } } = field;

  return (
    <FormGroupMarkup error={error && touched ? error : undefined} label={field.label} required={field.required}>
      <DatePicker {...field.input} className="form-control" format={field.dateFormat} locale={field.locale}/>
    </FormGroupMarkup>
  );
};

export default renderDateInput;
