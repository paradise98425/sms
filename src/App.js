import React, { Component } from 'react';
import './App.css';
import Routes from './routes';

class App extends Component {
  render() {
    //console.log(window.location.pathname)
    return (
      <div className="App">
         <Routes />
      </div>
    );
  }
}

export default App;
