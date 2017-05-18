import React from 'react';
import FormGroupMarkup from '../FormGroupMarkup';
import DateRangeInput from 'opuscapita-react-dates/lib/DateRangeInput';
import I18nLinker from 'opuscapita-react-dates/lib/I18nLinker';
import _ from 'lodash';

const _extractError = (firstField, secondField) => {
  let error;
  if (firstField.meta.error && firstField.meta.touched) {
    error = firstField.meta.error;
  } else if (secondField.meta.error && secondField.meta.touched) {
    error = secondField.meta.error;
  }
  return error;
};

const renderDateRange = (fields) => {
  const { label, required, fromFieldName, toFieldName } = fields;
  const fromField = _.get(fields, fromFieldName);
  const toField = _.get(fields, toFieldName);

  return (
    <FormGroupMarkup error={_extractError(fromField, toField)} label={label} required={required}>
      <I18nLinker>
        <DateRangeInput
          value={[fromField.input.value, toField.input.value]}
          onChange={(value) => { fromField.input.onChange(value[0]); toField.input.onChange(value[1]); }}
          onBlur={(e) => { fromField.input.onBlur(); toField.input.onBlur(); e.preventDefault(); }}
          variants={[]}
        />
      </I18nLinker>
    </FormGroupMarkup>
  );
};

export default renderDateRange;
