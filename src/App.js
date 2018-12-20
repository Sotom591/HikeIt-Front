import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import HomeContainer from './containers/HomeContainer'
import NavBar from './components/NavBar'
import TrailsContainer from './containers/TrailsContainer'

// componentDidMount(){
//   fetch('')
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        < NavBar />
        <Route exact path='/' render={() => < HomeContainer /> } />
        <Route exact path ='/trails' render={() => < TrailsContainer /> } />
      </div>
    );
  }
}

export default App;
