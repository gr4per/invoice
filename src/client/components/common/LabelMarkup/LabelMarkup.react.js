import './LabelMarkup.less';
import React, {PropTypes} from 'react';

const LabelMarkup = (props, context) => {

  let wrapperClass = props.wrapperClass || 'col-sm-7';
  let fieldError;

  if (props.error) {
    fieldError =
      (<div className="label label-danger error-container">
        {context.i18n.getMessage(props.error)}
      </div>)
  }

  return (
    <div className={`${wrapperClass} ${props.error ? 'has-error' : ''}`}>
      {props.children}
      {fieldError}
    </div>
  )
};

LabelMarkup.propTypes = {
  error: React.PropTypes.string,
  wrapperClass: React.PropTypes.string,
};

LabelMarkup.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default LabelMarkup;
