import React from 'react'
import { Route } from 'react-router-dom';
import UserInfo from '../components/UserInfo'
import UserTrails from '../components/UserTrails'

 const UserContainer = (props) => {

    return(
      <div>
        {props.userTrails.map(trail => <Route exact path ='/myhikes' render={() => < UserTrails handleSelectedUserTrail={props.handleSelectedUserTrail} key={trail.id} trail={trail} /> } />)}

        <Route exact path ='/profile' render={() => < UserInfo currentUser={props.currentUser}/> } />

      </div>
    )
}

export default UserContainer
