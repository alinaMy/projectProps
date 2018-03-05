import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
      return <div className="AppHeader">
          Welcome to page
          - {this.props.siteName} -
      </div>;
  }
}

export default Header;
