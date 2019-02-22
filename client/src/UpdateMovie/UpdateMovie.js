import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

class UpdateMovie extends Component { 
	constructor(props){
		super(props)
		this.state = {
			movie: this.props.location.state.movie,
			updated: false 
		}
	}

	onMovieFormChange = (evnt) => {
    	this.setState({
      		[evnt.target.name]: evnt.target.value
    	})
  	}

  	onMovieFormSubmit = async (evnt) => {
  		evnt.preventDefault()

  		let updatedMovieInfo = {
			title: this.state.title, 
			director: this.state.director,
			year: this.state.year, 
			plot: this.state.plot
		}

		await axios.put(`/movies/${this.state.movie.id}`, updatedMovieInfo)
			.then(res => console.log(res.data))

		this.setState({
			updated: true
		})
  	}

	render(){
		if(this.state.updated){
			return <Redirect to={`/movie/${this.state.movie.id}`} />
		}
		return(
			
			<div className="update-movie">
				<Link to={`/movie/${this.state.movie.id}`}>Back to Movie</Link>
				<br />
				<Link to='/'>Back to All Movies</Link>

				<h2>Update Movie</h2>
				<form onChange={this.onMovieFormChange} onSubmit={this.onMovieFormSubmit}>
					<div>
			          	<label htmlFor="title">Title: </label>
			          	<input
			          		type="text" 
			            	name="title"
			            	defaultValue={this.state.movie.title}
			          	/>
		          	</div>

		          	<div>
			          	<label htmlFor="director">Director: </label>
			          	<input
			          		type="text" 
			            	name="director"
			            	defaultValue={this.state.movie.director}
			          	/>
		          	</div>

		          	<div>
			          	<label htmlFor="year">Year: </label>
			          	<input
			          		type="number" 
			            	name="year"
			            	defaultValue={this.state.movie.year}
			          	/>
		          	</div>

		          	<div>
			          	<label htmlFor="plot">Plot: </label>
			          	<textarea
			            	name="plot"
			            	defaultValue={this.state.movie.plot}
			          	/>
		          	</div>

		          	<div>
		          		<button type="submit" className="button">Update Movie</button>
		          	</div>
				</form> 
			</div>
		)
	}
}

export default UpdateMovie 

