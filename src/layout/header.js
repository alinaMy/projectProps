import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
      return <div className="AppHeader">
          Welcome to page
          - {this.props.siteName === 'react' ? 'React' : 'NoReact'} -
      </div>;
  }
}

export default Header;
