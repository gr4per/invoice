import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import routes from '../routes';
import Router from 'react-router/lib/Router';
import I18nContext from '../components/util/I18nContext.react';
import UserInfoProvider from '../components/util/UserInfoProvider.react';

const InvoiceApplication = ({ locale, formatPatterns }) => (
  <I18nContext locale={locale} formatPatterns={formatPatterns}>
    <UserInfoProvider>
      <Router history={browserHistory}>
        {routes('')}
      </Router >
    </UserInfoProvider>
  </I18nContext>
);

InvoiceApplication.propTypes = {
  locale: PropTypes.string.isRequired,
  formatPatterns: React.PropTypes.object
};

export default InvoiceApplication;

