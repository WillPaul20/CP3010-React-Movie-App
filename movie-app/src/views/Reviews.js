import React from "react";
import Button from "../components/Button";

//TODO: Make form add a new movie to the list of movies

const Reviews = ({ movies, setMovies }) => {
	return (
		<div>
			<form>
				<div className='form-container'>
					<input
						type='text'
						id='movieName'
						name='movieName'
						placeholder='Movie Name'
					/>
					<input
						type='text'
						id='movieReleaseDate'
						name='movieReleaseDate'
						placeholder='Release Date'
					/>
					<input
						type='text'
						id='movieActors'
						name='movieActors'
						placeholder='Actors'
					/>
					<select name='moviePoster'>
						<option value='1'>Default Image</option>
						<option value='2'>Upload Image</option>
					</select>

					<select name='movieRating'>
						<option value='1'>1 Star</option>
						<option value='2'>2 Stars</option>
						<option value='3'>3 Stars</option>
						<option value='4'>4 Stars</option>
						<option value='5'>5 Stars</option>
					</select>
					<button className='btn'>Add Movie Review</button>
				</div>
			</form>
		</div>
	);
};

export default Reviews;
