import React, { Component } from "react";
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

class Movie extends Component {
	constructor(){
		super()
		this.state = {
			movie: {},
			deleted: false, 
			redirect: false
		}
	}

	getMovieData = async () => {
	  	await axios
			.get(`/movies/${this.props.match.params.id}`)
			.then(response => {
				console.log(response.data)
				let movie = response.data.movie

				this.setState({
					movie: movie
				})
				console.log(this.state.movie)
			})
			.catch(error => {
				console.error("Error: ", error)
			})
  	}

  	handleClick = (evnt) => {
      this.setState({
        redirect: true
      })
    }

    handleDelete = async (evnt) => {
    	await axios.delete(`/movies/${this.state.movie.id}`)
        	.then(res => console.log(res.data, 'Movie Deleted.'))

        this.setState({
        	deleted: true,
        	redirect: true
        })
    }

  	componentDidMount = () => {
  		this.getMovieData()
  	}


	render(){
		if(this.state.redirect){
			if(this.state.deleted){
					return <Redirect to='/' />
			}

			return (
				<Redirect
				  push to={{
				    pathname: "/update-movie",
				    state: { movie: this.state.movie }
				  }}
				/>
			)
		}
		return(
			<div>
				<Link to='/'>All Movies</Link>
				<h1>{this.state.movie.title}</h1>
				<p>
					Director: {this.state.movie.director} <br />
					Year: {this.state.movie.year} <br />
					Plot: {this.state.movie.plot}
				</p>
				<button type="button" onClick={this.handleClick}>Update Movie</button>
				<button type="button" onClick={this.handleDelete}>Delete Movie</button>
			</div>
		)
	}


}

export default Movie