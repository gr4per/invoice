import React, { PropTypes } from 'react';

const FieldTip = ({ messageKey, className }, context) => (
  <div className={`${className || 'col-sm-offset-5 col-sm-7'}`}>
    <p className="help-block">
      <small className="text-muted" style="font-size: small;">
        {context.i18n.getMessage(messageKey)}
      </small>
    </p>
  </div>
);

FieldTip.propTypes = {
  messageKey: PropTypes.string.isRequired,
  className: PropTypes.string
};

FieldTip.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default FieldTip;
