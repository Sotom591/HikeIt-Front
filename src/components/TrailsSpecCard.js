import React from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


const TrailsSpecCard = ({trail, userTrail}) => {

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
          <h2 className='trail-name'>{trail.name + " "}{difficultyRating()}</h2>
          <div className='star-rating'><Rater total={5} interactive={false} rating={trail.stars}/></div>
          <div className='t-detailsDiv'>
          <img className='trail-img' alt={trail.name} src={trail.imgMedium}/>
          <div className="t-dets">
           <h4>Location: </h4> <p className="dets-p"> {trail.location} </p>
           <h4> Length: </h4> <p className="dets-p"> {trail.length}</p>
           <h4>Ascent: </h4> <p className="dets-p"> {trail.ascent}</p>
           <h4>Descent: </h4> <p className="dets-p">{trail.descent}</p>
           <h4>Coordinates: </h4> <p className="dets-p">{trail.latitude + ", " + trail.longitude}</p>
           <h4>Conditions as of {trail.conditionDate}: </h4> <p className="dets-p">{trail.conditionDetails} </p>
          </div>
          </div>
          <button className='ui secondary button' id='hike-btn'>Keep It For Later <i class="bookmark outline icon"></i></button>
          <button className='ui secondary button' id='fav-btn'>Add To Favorites <i class="heart outline icon"></i></button>
          </div>
        : null}
        {userTrail ?
            <div className='trail-specs'>
            <h2  className='trail-name'>{userTrail.name + " "}{difficultyRatingUser()}</h2>
            <div className='star-rating'> <Rater total={5} interactive={false} rating={userTrail.stars}/></div>
            <div className='t-detailsDiv'>
            <img className='trail-img' alt={userTrail.name} src={userTrail.imgMedium}/>
            <div className="t-dets">
             <h4> Location:</h4> <p className="dets-p"> {userTrail.location} </p>
             <h4> Length: </h4> <p className="dets-p">{userTrail.length}</p>
             <h4>Ascent: </h4> <p className="dets-p">{userTrail.ascent}</p>
             <h4>Descent: </h4> <p className="dets-p">{userTrail.descent}</p>
             <h4>Coordinates: </h4> <p className="dets-p">{userTrail.latitude + ", " + userTrail.longitude}</p>
            </div>
            </div>
            <button className='ui secondary button' id='hike-btn'>Keep It For Later</button>
            <button className='ui secondary button' id='fav-btn'>Add To Favorites</button>
            </div>
          : null}

      </div>
    )

}

export default TrailsSpecCard
