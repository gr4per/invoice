import React, { Component, Children } from 'react';
import { I18nManager } from 'opuscapita-i18n';

export default class I18nContext extends Component {

  static propTypes = {
    locale: React.PropTypes.string,
    formatPatterns: React.PropTypes.object
  };

  static contextTypes = {
    i18n: React.PropTypes.object
  };

  static childContextTypes = {
    i18n: React.PropTypes.object.isRequired
  };

  getChildContext = () => {
    if (!this.context.i18n) {
      if (!this.props.formatPatterns) {
        console.warn('Attribute [formatPatterns] is required, because I18nManager is not defined in parent context');
      }

      if (!this.props.locale) {
        console.warn('Attribute [locale] is required, because I18nManager is not defined in parent context');
      }

      this.context.i18n = new I18nManager(this.props.locale, null, this.props.formatPatterns);
    }

    return {
      i18n: this.context.i18n.register(this.constructor.name, [])
    };
  };

  render() {
    return Children.only(this.props.children);
  }
}
