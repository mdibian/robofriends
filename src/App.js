import React from 'react';
import CardArray from './CardArray.js'
import { robots } from './robots.js'
import SearchBox from './SearchBox.js'
import './App.css'

const App = () => {
  return (
  	<div className='app-container'>
  	  <h1>RoboFriends</h1>
  	  <SearchBox />
  	  <CardArray robots={robots}/>
  	</div>
  );
}

export default App;