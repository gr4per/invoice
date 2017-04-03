import React, { PropTypes } from 'react';
import _ from 'lodash';
import LabelMarkup from '../LabelMarkup';
import FieldTip from '../FieldTip.react';

const getLabel = (labelType, labelText, isLabelMarkedAsRequired, i18n) => {
  return (
    <label className={labelType !== 'span' ? 'control-label' : ''}>
      {i18n.getMessage(labelText)}
      {isLabelMarkedAsRequired && <span className="error"> *</span>}
    </label>
  )
};

const getLabelContainer = (labelClass, labelType, labelText, isLabelMarkedAsRequired, i18n) => (
  <div className={labelClass}>
    {getLabel(labelType, labelText, isLabelMarkedAsRequired, i18n)}
  </div>
);

const FormGroupMarkup = (props, context) => {

  let fieldId = props.children.props.id;
  let errors = props.errors || [];
  let labelClass = props.labelClass || 'col-sm-5';
  let error = _.find(errors, (it) => it.hasOwnProperty(fieldId));

  return (
    <div className={`form-group ${error ? 'has-error' : ''}`}>
      {getLabelContainer(labelClass, props.children.type, props.label, props.required, context.i18n)}
      <LabelMarkup {...props}/>
      {props.tip && <FieldTip messageKey={props.tip} className={props.tipClass}/>}
    </div>
  )
};

FormGroupMarkup.propTypes = {
  errors: PropTypes.array,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  tip: PropTypes.string,
  tipClass: PropTypes.string
};

FormGroupMarkup.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default FormGroupMarkup;
