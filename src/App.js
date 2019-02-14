import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Healthcare from './Healthcare';
import Information from './Information';
import Culture from './Culture';
import Platform from './Platform'
import Offices from './TheOffice'
import Logo from './Logo'
import Footer from './Footer'
class App extends Component {
  render() {
    return (
      <div>
        <Header  />
        <Healthcare />
        <Information />
        <Culture/>
        <Platform  />
        <Offices />
        <Logo />
        <Footer />
      </div>
    );
  }
}

export default App;
