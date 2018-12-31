import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PackList from '../components/PackList'


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
    console.log(this.props)
    return(
      <div>
        <h4>Pack For It!</h4>
        <div className="ui bulleted list" >
        {this.props.lists.map(list =>
          <Link to={`/lists/${list.id}`}>
          <div className="item" onClick={this.props.handleSelectedList} id={list.id} key={list.id}> {list.title} </div>
          </Link>
        )}
        </div>
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
