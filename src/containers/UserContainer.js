import React from 'react'
import UserInfo from '../components/UserInfo'

const UserContainer = (props) =>{

  return(
    <div>
      < UserInfo currentUser={props.currentUser}/>
    </div>
  )
}
export default UserContainer
