import React, { Component } from 'react';
import './App.css'
import CardArray from '../components/CardArray.js'
import SearchBox from '../components/SearchBox.js'
import Scroll from '../components/Scroll.js';

class App extends Component {
  constructor() {
	super();
	this.state = {
	  robots: [],
	  searchField: ''
	};
  }

  componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => this.setState({robots: users}));
  }

  onSearchChange(event) {
	this.setState({searchField: event.target.value});
  }

  render() {
	const { robots, searchField } = this.state;

    const filteredRobots = robots.filter(robot => {
	  return robot.name.toLowerCase().includes(searchField.toLowerCase());
	})

	return !robots.length ? 
	<h1 style={{textAlign: 'center'}}>Loading...</h1> : 
	(
	  <div className='app-container'>
  	    <h1>RoboFriends</h1>
		<SearchBox searchChange={this.onSearchChange.bind(this)}/>
		<Scroll>
		  <CardArray robots={filteredRobots}/>
	    </Scroll>
	  </div>
	);
  }
}

export default App;