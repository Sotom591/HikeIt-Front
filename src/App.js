import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import HomeContainer from './containers/HomeContainer'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        < NavBar />
        <Route exact path='/' render={() => < HomeContainer /> } />
      </div>
    );
  }
}

export default App;
