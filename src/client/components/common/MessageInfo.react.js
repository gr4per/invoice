import React, {PropTypes} from 'react';

const MessageInfo = ({message, type}) => (
  <div className={`bs-callout bs-callout-${type}`}>
    <div>
      {message}
      <br/>
    </div>
  </div>
);


MessageInfo.propTypes = {
  type: PropTypes.oneOf(
    [
      'default',
      'default',
      'success',
      'info',
      'warning',
      'danger'
    ]
  ),
  message: PropTypes.string.isRequired
};

MessageInfo.defaultProps = {
  type: 'default'
};

export default MessageInfo;
