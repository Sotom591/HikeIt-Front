import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomeContainer from './containers/HomeContainer'
import NavBar from './components/NavBar'
import TrailsContainer from './containers/TrailsContainer'
import PackListContainer from './containers/PackListContainer'
import UserContainer from './containers/UserContainer'
import TrailsSpecContainer from './containers/TrailsSpecContainer'


class App extends Component {

  state = {
    latitude: null,
    longitude: null,
    error: null,
    trails: [],
    selectedTrail: null,
    currentUser: null,
    userTrails: []
  }

  componentDidMount(){
    this.getUserTrails()
    this.setLoginToken()
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
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
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

  setLoginToken = () => {
   let token = localStorage.getItem('token')
    if(token){
      fetch(`http://localhost:3000/profile`, {
        method: "GET",
        headers: {
          "Authentication": `Bearer ${token}`}
        })
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentUser: data.user
        })
      })
    } else {
      console.log("user needs to manually login")
    }
  }

  getUserTrails = () => {
    fetch(`http://localhost:3000/users/1`)
      .then(res => res.json())
      .then(data => {this.setState({
          userTrails: data.hiking_lists
        })
      })
    }

  handleSelectedTrail = (e) => {
    let trailId = e.currentTarget.id
    let selectedTrail = this.state.trails.find(trail => trail.id === parseInt(trailId))
    this.setState({
      selectedTrail: selectedTrail
    })
  }

  handleSelectedUserTrail = (e) => {
    let trailId = e.currentTarget.id
    let selectedTrail = this.state.userTrails.find(trail => trail.id === parseInt(trailId))
    this.setState({
      selectedTrail: selectedTrail
    })
  }

  setCurrentUser = (userObj) => {
    this.setState({
      currentUser: userObj
    })
  }

  render() {
    return (
      <div className="App">
        < NavBar currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
        <Route exact path='/' render={() => < HomeContainer
         setCurrentUser={this.setCurrentUser}
          currentUser={this.state.currentUser}/> } />

        <Route exact path='/trails' render={() => < TrailsContainer trails={this.state.trails} handleSelectedTrail={this.handleSelectedTrail}/>} />

        <Route exact path='/trails/:id' render={(props) => {
          let trailId = props.match.params.id
          return <TrailsSpecContainer userTrail={this.state.userTrails.find(trail => trail.id === parseInt(trailId))}
          trail={this.state.trails.find(trail => trail.id === parseInt(trailId))}/>
        }} />

        <Route exact path='/packinglists' render={() => < PackListContainer /> } />
        < UserContainer userTrails={this.state.userTrails} currentUser={this.state.currentUser} handleSelectedUserTrail={this.handleSelectedUserTrail}/>
      </div>
    );
  }
}

export default App
