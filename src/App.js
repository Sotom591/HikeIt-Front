import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomeContainer from './containers/HomeContainer'
import NavBar from './components/NavBar'
import TrailsContainer from './containers/TrailsContainer'
import PackListContainer from './containers/PackListContainer'
import UserContainer from './containers/UserContainer'
import TrailsSpecContainer from './containers/TrailsSpecContainer'
import PackList from './components/PackList'


class App extends Component {

  state = {
    latitude: null,
    longitude: null,
    error: null,
    trails: [],
    selectedTrail: null,
    currentUser: null,
    userTrails: [],
    userLists: [],
    userItems: [],
    selectedList: null,
    formInput: ""
  }

  componentDidMount(){
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
        this.getUserData(data.user.id)
      })
    } else {
      console.log("user needs to manually login")
    }
  }

  getUserData = (userId) => {
    fetch(`http://localhost:3000/users/${userId}`)
      .then(res => res.json())
      .then(data =>
        {
        this.setState({
          userTrails: data.hiking_lists,
          userLists: data.packing_lists,
          userItems: data.packing_items
        })
      })
    }

  setCurrentUser = (userObj) => {
    this.setState({
      currentUser: userObj
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

  handleSelectedList = (e) => {
    let listId = e.currentTarget.id
    let selectedList = this.state.userLists.find(list => list.id === parseInt(listId))
    this.setState({
      selectedList: selectedList
    })
  }

  onListFormChange = (e) => {
    this.setState({
      formInput: e.currentTarget.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    let listId = e.currentTarget.id
    let token = localStorage.getItem('token')
    // console.log("submitted", token)
    fetch('http://localhost:3000/packing_items', {
      method: "POST",
      headers: {
        "Authentication": `Bearer ${token}`,
        "Content-Type": "application/json",
         "Accept": "application/json"
       },
      body: JSON.stringify({
        name: this.state.formInput,
        packed: false,
        packing_list_id: listId
      })
    })
    .then(res => res.json())
    .then(newItem => {
      this.setState({
        userItems: [...this.state.userItems, newItem]
      })
    })
  }

  packChange = (itemId, packed) => {
    // console.log(itemId, packed)
    let id = parseInt(itemId)
    let token = localStorage.getItem('token')
    fetch(`http://localhost:3000/packing_items/${id}`, {
      method: "PATCH",
      headers: {
        "Authentication": `Bearer ${token}`,
        "Content-Type": "application/json",
         "Accept": "application/json"
       },
      body: JSON.stringify({
        packed: packed,
      })
    })
    .then(res => res.json())
    .then(nowPacked => {
      console.log(nowPacked)
    })
  }

  removeItem = (itemId) => {
    console.log(`removing ${itemId}`)
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

        <Route exact path='/lists' render={() => {
          return < PackListContainer lists={this.state.userLists}  handleSelectedList={this.handleSelectedList}/>
        }} />

        <Route exact path='/lists/:id' render={(props) =>
          {
            let listId = props.match.params.id
            return < PackList list={this.state.userLists.find(list =>
            list.id === parseInt(listId))}
            items={this.state.userItems.filter(items => items.packing_list_id === parseInt(listId))} packChange={this.packChange}
            onListFormChange={this.onListFormChange}
            onFormSubmit={this.onFormSubmit} removeItem={this.removeItem}/>
        }} />

        < UserContainer userTrails={this.state.userTrails} currentUser={this.state.currentUser} handleSelectedUserTrail={this.handleSelectedUserTrail}/>


      </div>
    );
  }
}

export default App
