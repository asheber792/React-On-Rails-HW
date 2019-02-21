import React, { Component } from "react";
import axios from 'axios'

class CreateMovie extends Component {
	constructor(){
		super()
		this.state = {
			movie: null,
			created: false 
		}
	}

	onMovieFormChange = (evnt) => {
		this.setState({
			[evnt.target.name]: evnt.target.value
		})
	}

	onMovieFormSubmit = (evnt) => {
		evnt.preventDefault()

		let newMovie = {
			title: this.state.title, 
			director: this.state.director,
			year: this.state.year,
			plot: this.state.plot 
		}

		axios.post('http://localhost:3001/movies', newMovie)
			.then(res => console.log(res.data))
			.catch(error => {
				console.error("Error: ", error)
			})

		this.setState({
			movie: newMovie,
			created: true
		})
	}

	render(){
		return(
			<div className="create-movie">
				<h2>Create Movie</h2>
				<form onChange={this.onMovieFormChange} onSubmit={this.onMovieFormSubmit}>
					<div>
			          	<label htmlFor="title">Title: </label>
			          	<input
			          		type="text" 
			            	name="title"
			            	placeholder="Movie Title" 
			            	value={this.state.title}
			          	/>
		          	</div>

		          	<div>
			          	<label htmlFor="director">Director: </label>
			          	<input
			          		type="text" 
			            	name="director"
			            	placeholder="Director Name" 
			            	value={this.state.director}
			          	/>
		          	</div>

		          	<div>
			          	<label htmlFor="year">Year: </label>
			          	<input
			          		type="number" 
			            	name="year"
			            	placeholder="Release Year" 
			            	value={this.state.year}
			          	/>
		          	</div>

		          	<div>
			          	<label htmlFor="plot">Plot: </label>
			          	<textarea
			            	name="plot"
			            	placeholder="Plot Description..." 
			            	value={this.state.plot}
			          	/>
		          	</div>

		          	<div>
		          		<button type="submit" className="button">Add Movie</button>
		          	</div>
				</form> 
			</div>
		)
	}
}

export default CreateMovie