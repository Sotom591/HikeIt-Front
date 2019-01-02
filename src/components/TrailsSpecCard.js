import React from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


const TrailsSpecCard = ({trail, userTrail}) => {

// <img src="https://cdn.apstatic.com/img/diff/greenBlk.svg">
"https://cdn.apstatic.com/img/diff/greenBlue.svg"
"https://cdn.apstatic.com/img/diff/blueBlack.svg"
// <img src="https://cdn.apstatic.com/img/diff/blueBlk.svg">
// <img src="https://cdn.apstatic.com/img/diff/blackBlk.svg">
// <img src="https://cdn.apstatic.com/img/diff/dblackBlk.svg">
  const difficultyRating = () =>{
      if(trail.difficulty === "green"){
        return <img className="diff-img" alt="green" src="https://cdn.apstatic.com/img/diff/greenBlk.svg" />
      } else if(trail.difficulty === "greenBlue"){
        return <img className="diff-img" alt="greenBlue" src="https://cdn.apstatic.com/img/diff/greenBlue.svg" />
      } else if(trail.difficulty === "blue"){
        return <img className="diff-img" alt="blue" src="https://cdn.apstatic.com/img/diff/blueBlk.svg" />
      } else if(trail.difficulty === "blueBlack"){
        return <img className="diff-img" alt="blueBlack" src="https://cdn.apstatic.com/img/diff/blueBlack.svg" />
      } else if(trail.difficulty === "black"){
        return <img className="diff-img" alt="black" src="https://cdn.apstatic.com/img/diff/blackBlk.svg" />
      } else if(trail.difficulty === "dblack"){
        return <img className="diff-img" alt="dblack" src="https://cdn.apstatic.com/img/diff/dblackBlk.svg" />
      } else {
        return null
      }
  }

  const difficultyRatingUser = () =>{
      if(userTrail.difficulty === "green"){
        return <img className="diff-img" alt="green" src="https://cdn.apstatic.com/img/diff/greenBlk.svg" />
      } else if(userTrail.difficulty === "greenBlue"){
        return <img className="diff-img" alt="greenBlue" src="https://cdn.apstatic.com/img/diff/greenBlue.svg" />
      } else if(userTrail.difficulty === "blue"){
        return <img className="diff-img" alt="blue" src="https://cdn.apstatic.com/img/diff/blueBlk.svg" />
      } else if(userTrail.difficulty === "blueBlack"){
        return <img className="diff-img" alt="blueBlack" src="https://cdn.apstatic.com/img/diff/blueBlack.svg" />
      } else if(userTrail.difficulty === "black"){
        return <img className="diff-img" alt="black" src="https://cdn.apstatic.com/img/diff/blackBlk.svg" />
      } else if(userTrail.difficulty === "dblack"){
        return <img className="diff-img" alt="dblack" src="https://cdn.apstatic.com/img/diff/dblackBlk.svg" />
      } else {
        return null
      }
  }

    return(

      <div>
      {trail ?
          <div className='trail-specs'>
          <h3 className='trail-name'>{trail.name + " "}{difficultyRating()}</h3>
          <div className='star-rating'><Rater total={5} interactive={false} rating={trail.stars}/></div>
          <img className='trail-img' alt={trail.name} src={trail.imgMedium}/>
          <button className='hike-btn'>Hike This!</button>
          <button className='fav-btn'>Add to Favs</button>
          </div>
        : null}
        {userTrail ?
            <div className='trail-specs'>
            <div className='star-rating'> <Rater total={5} interactive={false} rating={userTrail.stars}/></div>
            <h3  className='trail-name'>{userTrail.name + " "}{difficultyRatingUser()}</h3>
            <img className='trail-img' alt={userTrail.name} src={userTrail.imgMedium}/>
            <div className='hike-btn'>
            <button>Hike This!</button>
            </div>
            <div className='fav-btn'>
            <button>Add to Favs</button>
            </div>
            </div>
          : null}

      </div>
    )

}

export default TrailsSpecCard
