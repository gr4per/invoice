import React, {PropTypes} from 'react';

const ActionBar = ({exportLink}, {i18n}) => (
  <nav className="navbar navbar-default navbar-sm">
    <div className="navbar-form pull-right">
      <a href={exportLink} target="_blank" className="btn btn-default">Export</a>
    </div>
  </nav>
);

ActionBar.propTypes = {
  exportLink: PropTypes.string.isRequired
};

ActionBar.contextTypes= {
  i18n: PropTypes.object.isRequired
};

export default ActionBar;
