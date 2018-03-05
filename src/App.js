import React, { Component } from 'react';
import './App.css';
import Header from './layout/header';
import Content from './layout/content';
import Footer from './layout/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
