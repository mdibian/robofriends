import React, { Component } from 'react';
import CardArray from './CardArray.js'
import SearchBox from './SearchBox.js'
import './App.css'

class App extends Component {
  constructor() {
	super();
	this.state = {
	  robots: [],
	  searchField: ''
	}
  }

  componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => this.setState({robots: users}))
  }

  onSearchChange(event) {
	this.setState({searchField: event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
	  return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
	})

    return (
	  <div className='app-container'>
  	    <h1>RoboFriends</h1>
  	    <SearchBox searchChange={this.onSearchChange.bind(this)}/>
  	    <CardArray robots={filteredRobots}/>
	  </div>
	);
  }
}

export default App;