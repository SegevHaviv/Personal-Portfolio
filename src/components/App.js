import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js'
import CustomGrid from './CustomGrid'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <CustomGrid/>
      </div>
    );
  }
}

export default App;
