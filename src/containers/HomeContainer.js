import React from 'react'
import Login from '../components/Login'
import ExploreContainer from './ExploreContainer'

const HomeContainer = (props) =>{
  return(
    <div className="home-container">
      {props.currentUser === null ? < Login setCurrentUser={props.setCurrentUser}/> : <div className="user-greeting"><h2>Welcome, {props.currentUser.firstName}!</h2></div>}
      < ExploreContainer />
    </div>
  )
}
export default HomeContainer
