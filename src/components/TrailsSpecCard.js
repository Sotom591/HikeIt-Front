import React from 'react'

const TrailsSpecCard = ({trail, userTrail}) => {
console.log(trail, userTrail)
    return(
      <div>
      {trail ?
          <div className='trail-specs'>
          <h3 className='trail-name'>{trail.name}</h3>
          <img className='trail-img' alt={trail.name} src={trail.imgMedium}/>
          <button className='hike-btn'>Hike This!</button>
          <button className='fav-btn'>Add to Favs</button>
          </div>
        : null}
        {userTrail ?
            <div className='trail-specs'>
            <h3  className='trail-name'>{userTrail.name}</h3>
            <img className='trail-img' alt={userTrail.name} src={userTrail.imgMedium}/>
            <button className='hike-btn'>Hike This!</button>
            <button className='fav-btn'>Add to Favs</button>
            </div>
          : null}

      </div>
    )

}

export default TrailsSpecCard
