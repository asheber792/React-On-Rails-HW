import React, { Component } from "react";
import "./style.css";
import axios from 'axios'
import { Redirect, Link, Route, Switch } from 'react-router-dom'

import MovieList from '../MovieList/MovieList'
import Movie from '../Movie/Movie'
import UpdateMovie from '../UpdateMovie/UpdateMovie'

class App extends Component {
  constructor() { 
  	super()
  }

  render() {
  	return(
  		<div className="App">
  			<Switch>
  				<Route exact path="/" component={MovieList} />	
  				<Route path="/movie/:id" component={Movie} />
  				<Route path="/update-movie" component={UpdateMovie} />
  			</Switch>
		</div>
	)
  }
}

export default App;
