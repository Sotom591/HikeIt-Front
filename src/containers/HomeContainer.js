import React from 'react'
import Login from '../components/Login'
import ExploreContainer from './ExploreContainer'

const HomeContainer = (props) =>{
  return(
    <div className="home-container">
      {props.currentUser === null ? < Login setCurrentUser={props.setCurrentUser}/> : <div className="user-greeting">Welcome, {props.currentUser.firstName}!</div>}
      < ExploreContainer />
    </div>
  )
}
export default HomeContainer
