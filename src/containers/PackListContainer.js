import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PackList from '../components/PackList'


const PackListContainer = (props) =>{
console.log(props)

  return(
    <div>
      <h4>Pack For It!</h4>
      <div className="ui bulleted list" >
      {props.packingLists.map(list =>
        <div className="item" key={list.id}> {list.title} </div>
      )}
      </div>
      <Route exact path='/packinglist/:id' render={() => {
        return < PackList packingItems={props.packingItems}/>
      }} />

    </div>
  )
}

export default PackListContainer



// <Route exact path='/packinglists' render={() => {
//   return this.state.userLists.map(list => < PackListContainer packingList={list} />)}
// } />

// <Link to={`/trails/${this.props.trail.id}`}>
