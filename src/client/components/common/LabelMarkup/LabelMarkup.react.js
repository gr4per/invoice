import './LabelMarkup.less';
import React from 'react';
import _ from 'lodash';

const LabelMarkup = (props) => {
  let fieldId = props.children.props.id;
  let errors = props.errors || [];
  let wrapperClass = props.wrapperClass || 'col-sm-7';
  let fieldError;
  let error = _.find(errors, (it) => it.hasOwnProperty(fieldId));

  if (error) {
    fieldError =
      <div className="label label-danger error-container">
        {error[fieldId]}
      </div>
  }

  return (
    <div className={`${wrapperClass} ${error ? 'has-error' : ''}`}>
      {props.children}
      {fieldError}
    </div>
  )
};

LabelMarkup.propTypes = {
  errors: React.PropTypes.array
};

export default LabelMarkup;
