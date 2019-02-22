import React, { Component } from "react";
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

import CreateMovie from '../CreateMovie/CreateMovie'

class MovieList extends Component {
  constructor() { 
  	super()
  	this.state = {
  		apiData: [], 
  		apiDataLoaded: false,
  	}
  }

  getMovieData = async () => {
  	await axios
		.get('/movies')
		.then(response => {
			console.log(response.data)
			let movies = response.data.movies
			this.setState({
				apiData: movies,
				apiDataLoaded: true
			})


			console.log(this.state.apiData)
		})
		.catch(error => {
			console.error("Error: ", error)
		})
  }

  componentDidMount = () => {
  	this.getMovieData()
  }

  render() {
  	return(
  		<div className="App">
  			<CreateMovie /> 
			{this.state.apiData.map(movie => {
				console.log(movie)
				return (
					<div key={movie.id}>
			    		<Link to={`/movie/${movie.id}`}>
			    			<h1>{movie.title}</h1>
			    		</Link>
			    		<p>
			    			<b>Director:</b> {movie.director} <br />
			    			<b>Year:</b> {movie.year} <br />
			    			<b>Plot:</b> {movie.plot} 
			    		</p>
			    	</div>
			    )
			})}
		</div>
	)
  }
}

export default MovieList;
