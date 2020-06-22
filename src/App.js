import React, { Component } from 'react';
import logo from './HolyCraap.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to HolyCraap ! </h2>
        </div>
        <p className="App-intro">
          To get started, better call <code>Ben</code> !
        </p>
      </div>
    );
  }
}

export default App;
