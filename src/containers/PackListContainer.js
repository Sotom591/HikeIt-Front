import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class PackListContainer extends Component {
  state = {
    selectedList: null
  }

  handleSelectedList = (e) => {
    let listId = e.currentTarget.id
    let selectedList = this.props.lists.find(list => list.id === parseInt(listId))
    this.setState({
      selectedList: selectedList
    })
  }

  render(){
    return(
      <div className='pack-container'>
        <h2>Pack For It!</h2>

        {this.props.lists.map(list =>

          <Link to={`/lists/${list.id}`}>
          <div className="ui bulleted list" >
          <div className="item" onClick={this.props.handleSelectedList} id={list.id} key={list.id}> {list.title} </div>
          </div>
          </Link>

        )}
        </div>

    )
  }

}

export default PackListContainer



// <Route exact path='/packinglists' render={() => {
//   return this.state.userLists.map(list => < PackListContainer packingList={list} />)}
// } />

// <Link to={`/trails/${this.props.trail.id}`}>

// <Route exact path='/trails/:id' render={(props) => {
//   let trailId = props.match.params.id
//   return <TrailsSpecContainer userTrail={this.state.userTrails.find(trail => trail.id === parseInt(trailId))}
//   trail={this.state.trails.find(trail => trail.id === parseInt(trailId))}/>
// }} />
