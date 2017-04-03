import React, { Component, PropTypes } from 'react';
import NotificationSystem from 'react-notification-system';
import SidebarMenu from '../components/common/SidebarMenu.react';
import { connect } from 'react-redux';
import _ from 'lodash';

@connect(
  state => ({
    notification: state.notification
  })
)
export default class Layout extends Component {

  static propTypes = {
    notification: PropTypes.object.isRequired
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    const { notification } = nextProps;
    if (_.size(notification.message) > 0) {
      // to support notification message translation we send i18 keys via redux and change them to
      // real translation before displaying
      this.refs.notificationSystem.addNotification(
        {
          ...notification,
          message: this.context.i18n.getMessage(notification.message)
        }
      );
    } else {
      this.removeNotification()
    }
  }

  removeNotification() {
    setTimeout(() => {
      this.refs.notificationSystem.removeNotification(this.props.notification);
    }, 5000);
  }

  render() {
    return (
      <span>
        <SidebarMenu/>
        <section className="content">
          <div className="container">
            <NotificationSystem ref="notificationSystem"/>
            <div>
              {this.props.children}
            </div>
          </div>
        </section>
      </span>
    );
  }
}
