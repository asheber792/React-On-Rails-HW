class MoviesController < ApplicationController
  def index
  	@movies = Movie.all
  	render json: {
  		message: "ok",
  		movies: @movies
  	}
  end

  def show
  	begin
  		@movie = Movie.find(params[:id])
  		render json: {
  			message: "ok", 
  			movie: @movie 
  		}
  	rescue ActiveRecord::RecordNotFound
  		render json: {
  			message: "Could not find movie with that ID"
  		}, 
  		status: 404 
  	rescue Exception 
  		render json: {
  			message: "There was some other error" 
  		}, 
  		status: 500
  	end
  end

  def new 
    @movie = Movie.new
  end 

  def create 
    begin
      @movie = Movie.new(movie_params)
      @movie.save
      render json: {
        message: "new movie created",
        movie: @movie
      }
    rescue Exception 
      render json: {
        message: "There was some other error" 
      }, 
      status: 500
    end
  end

  def edit 
    begin
      @movie = Movie.find(params[:id])
      render json: {
        message: "movie selected to update", 
        movie: @movie 
      }
    end 
  end 

  def update 
    begin
      movie = Movie.find(params[:id])
      movie.update_attributes(movie_params)
    rescue Exception 
      render json: {
        message: "There was some other error" 
      }, 
      status: 500
    end
  end 

  def destroy
    begin
      @movie = Movie.destroy(params[:id]) 
    rescue ActiveRecord::RecordNotFound
      render json: {
        message: "Could not find movie with that ID"
      }, 
      status: 404 
    rescue Exception 
      render json: {
        message: "There was some other error" 
      }, 
      status: 500
    end
  end 

  private 

  def movie_params
    params.require(:movie).permit(:title, :director, :year, :plot) 
  end

end
