import React from 'react'
import { Route } from 'react-router-dom';
import UserInfo from '../components/UserInfo'
import UserTrails from '../components/UserTrails'

const UserContainer = (props) =>{

  return(
    <div>
      <Route exact path ='/profile' render={() => < UserInfo currentUser={props.currentUser}/> } />
      <Route exact path ='/myhikes' render={() => < UserTrails currentUser={props.currentUser} /> } />
    </div>
  )
}
export default UserContainer
