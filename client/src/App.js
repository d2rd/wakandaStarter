import React, { Component } from 'react';
import logo from './assets/wakandaFlag-620x460.jpg';  //REPLACE WITH D2RDROID
import './App.css';
import People from './components/people/people'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p></p>
         <h1 className="App-title">Welcome to Wakanda</h1>
        </header>
        <People />
      </div>
    );
  }
}

export default App;
