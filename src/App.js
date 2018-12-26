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
    error: null,
    trails: []
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

    fetch(`https://www.hikingproject.com/data/get-trails?lat=${this.state.latitude}&lon=${this.state.longitude}&maxDistance=100&key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(data => this.setState({
      trails: data.trails
    })
  )
  }



  render() {
    return (
      <div className="App">
        < NavBar />
        <Route exact path='/' render={() => < HomeContainer /> } />

        <Route exact path ='/trails' render={() => < TrailsContainer trails={this.state.trails} />} />

        <Route exact path ='/packinglists' render={() => < PackListContainer /> } />
        <Route exact path ='/profile' render={() => < UserContainer /> } />
      </div>
    );
  }
}

export default App;
// process.env.REACT_APP_API_KEY
