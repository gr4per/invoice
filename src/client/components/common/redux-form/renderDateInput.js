import React from 'react';
import DatePicker from '../Datepicker/DatePicker.react';
import _ from 'lodash';
import FormGroupMarkup from '../FormGroupMarkup';

const renderDateInput = (field) => {
  const { meta: { touched, error } } = field;
  let hasError = !_.isEmpty(error) && touched;

  return (
    <FormGroupMarkup errors={hasError ? error : undefined} label={field.label} required={field.required}>
      <DatePicker {...field.input} className="form-control" format={field.dateFormat} locale={field.locale}/>
    </FormGroupMarkup>
  );
};

export default renderDateInput;
