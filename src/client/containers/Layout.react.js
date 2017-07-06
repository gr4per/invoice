import React, {PropTypes} from 'react';
import SidebarMenu from '../components/common/SidebarMenu.react';
import NotificationProvider from '../components/common/NotificationProvider.react';
import { HeaderMenu } from 'ocbesbn-react-components';

// TODO: Not place NotificationProvider in representational component
const Layout = (props, {currentUserData}) => (
  <span>
    <SidebarMenu/>
    <section className="content" style={{ 'backgroundColor': 'white' }}>
      <HeaderMenu currentUserData={currentUserData} />
      <div className="container-fluid">
        <NotificationProvider>
          {props.children}
        </NotificationProvider>
      </div>
    </section>
  </span>
);

Layout.contextTypes = {
  currentUserData: PropTypes.object.isRequired
};

export default Layout;
