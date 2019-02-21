import React, { Component } from "react";
import "./style.css";
import axios from 'axios'

import CreateMovie from '../CreateMovie/CreateMovie'

class App extends Component {
  constructor() { 
  	super()
  	this.state = {
  		apiData: [], 
  		apiDataLoaded: false 
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

  	let movies = this.state.apiData
  	console.log(movies)
  }

  render() {
  	return(
  		<div className="App">
  			<CreateMovie /> 
			{this.state.apiData.map(movie => {
				console.log(movie)
				return (
					<div key={movie.id}>
			    		<h1>{movie.title}</h1>
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

export default App;
