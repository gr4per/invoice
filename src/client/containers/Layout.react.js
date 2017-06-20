import React from 'react';
import SidebarMenu from '../components/common/SidebarMenu.react';
import NotificationProvider from '../components/common/NotificationProvider.react';

// TODO: Not place NotificationProvider in representational component
const Layout = (props) => (
  <span>
    <SidebarMenu/>
    <section className="content" style={{ 'backgroundColor': 'white' }}>
      <div className="container-fluid">
        <NotificationProvider>
          {props.children}
        </NotificationProvider>
      </div>
    </section>
  </span>
);

export default Layout;
