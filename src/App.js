import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomeContainer from './containers/HomeContainer'
import NavBar from './components/NavBar'
import TrailsContainer from './containers/TrailsContainer'
import PackListContainer from './containers/PackListContainer'
import UserContainer from './containers/UserContainer'


class App extends Component {

  state = {
    latitude: null,
    longitude: null,
    error: null
  }

  componentDidMount(){
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        }, () => {this.fetchTrailsByCoords()}
      );
      },
        (error) => this.setState({
          error: error.message
        }),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      )
  }

  fetchTrailsByCoords = () =>{
    console.log(this.state.latitude, this.state.longitude)
  }
  render() {
    return (
      <div className="App">
        < NavBar />
        <Route exact path='/' render={() => < HomeContainer /> } />
        <Route exact path ='/trails' render={() => < TrailsContainer /> } />
        <Route exact path ='/packinglists' render={() => < PackListContainer /> } />
        <Route exact path ='/profile' render={() => < UserContainer /> } />
      </div>
    );
  }
}

export default App;
// process.env.REACT_APP_API_KEY
