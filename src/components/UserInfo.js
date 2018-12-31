import React from 'react'



const UserInfo = (props) => {

    return(
      <div>
        { props.currentUser ?
          <div className="user-info">
          <h3>{props.currentUser.username}</h3>
          <div className="ui centered card">
            <div className="image">
            {props.currentUser.avatar !== null ? <img alt="avatar" src={props.currentUser.avatar} /> : <img alt="default avatar" src="https://avatars3.githubusercontent.com/u/40308424?s=400&v=4" />}
            </div>
          </div>
          <div>
            <h3>Name: {props.currentUser.firstName + " " + props.currentUser.lastName} </h3>
            <h3>My Fav Hikes: {props.userTrails.length} </h3>
            <h3>My Packing Lists: {props.userLists.length} </h3>
          </div>
          </div>
          : null }

      </div>
    )
}

export default UserInfo
  // <img alt="user avatar" src={this.props.currentUser.avatar}/>
      // : < Redirect to='/'/> }
