import React from 'react';

/**
 * OpusCaputa sidebar menu
 * Parent component should be body (or at least span - otherwise height won't be 100%)
 */
const SidebarMenu = () => (
  <section className="sidebar">
    <nav className="navbar navbar-default">
      <div className="nav-background"/>
      <div className="navbar-header hidden-md">
        <a className="navbar-brand visible-lg" href="#">
          <img src="/invoice/static/img/oc-logo-white.svg" style={{ height: '1.4em' }}/>
        </a>
      </div>
      <ul className="nav navbar-nav">
        <li key="InvoiceOverview">
          <a href="/invoice/">
            Invoice Overview
          </a>
        </li>
        <li key="CreateInvoice">
          <a href="/invoice/create">
            Create Invoice Manually
          </a>
        </li>
      </ul>
    </nav>
  </section>
);

export default SidebarMenu;
