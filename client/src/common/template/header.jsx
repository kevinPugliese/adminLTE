import React from 'react';

export default props => (
  <header className="main-header">
    <a href="/#/" className="logo">
      <span className="logo-mini"><i className="fa fa-money"></i></span>
      <span className="logo-lg">
        <i className="fa fa-money"></i>
        <b> My</b> Money
      </span>
    </a>
    <nav className="navbar navbar-static-top">
      <a href data-toggle="offcanvas" className="sidebar-toggle"></a>
    </nav>
  </header>
)
