import React, { Component } from 'react';
import './App.css';
import Header from './layout/header';
import Content from './layout/content';
import Footer from './layout/footer';

class App extends Component {
  render() {

    const sn = 'react';
    return (
      <div className="App">
        <Header siteName = {sn} />
        <Content />
        <Footer name = {sn}/>
      </div>
    );
  }
}

export default App;
