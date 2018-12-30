import React from 'react'

const TrailsSpecCard = ({trail, userTrail}) => {
console.log(trail, userTrail)
    return(
      <div>
      {trail ?
          <div>
          <h3>{trail.name}</h3>
          <img alt={trail.name} src={trail.imgMedium}/>
          <button>Hike This!</button>
          <button>Add to Favs</button>
          </div>
        : null}
        {userTrail ?
            <div>
            <h3>{userTrail.name}</h3>
            <img alt={userTrail.name} src={userTrail.imgMedium}/>
            <button>Hike This!</button>
            <button>Add to Favs</button>
            </div>
          : null}

      </div>
    )

}

export default TrailsSpecCard
