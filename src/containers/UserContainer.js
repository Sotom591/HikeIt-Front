import React from 'react'
import { Route } from 'react-router-dom';
import UserInfo from '../components/UserInfo'
import UserTrails from '../components/UserTrails'

 const UserContainer = (props) => {
    return(
      <div>
        {props.userTrails.map(trail => <Route key={trail.id} exact path ='/myhikes' render={() => < UserTrails  handleSelectedUserTrail={props.handleSelectedUserTrail}  trail={trail} /> } /> )}


        <Route exact path ='/profile' render={() => < UserInfo userTrails={props.userTrails} userLists={props.userLists} currentUser={props.currentUser}/> } />

      </div>
    )
}

export default UserContainer
