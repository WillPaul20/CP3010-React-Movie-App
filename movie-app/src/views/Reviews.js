import React from "react";

const Reviews = ({ movies, setMovies }) => {
	let newMovies = movies;

	const [movieName, setMovieName] = React.useState("");
	const [movieReleaseDate, setMovieReleaseDate] = React.useState("");
	const [movieActors, setMovieActors] = React.useState("");
	const [moviePoster, setMoviePoster] = React.useState("");
	const [movieRating, setMovieRating] = React.useState("");

	const movieChange = (event) => {
		setMovieName(event.target.value);
	};

	const releaseDateChange = (event) => {
		setMovieReleaseDate(event.target.value);
	};

	const actorsChange = (event) => {
		setMovieActors(event.target.value);
	};

	const posterChange = (event) => {
		setMoviePoster(event.target.value);
	};

	const ratingChange = (event) => {
		setMovieRating(event.target.value);
	};

	

	return (
		<div>
			<form method='post' action='/api/updateMovies'>
				<div className='form-container'>
					<input
						type='text'
						id='movieName'
						name='movieName'
						placeholder='Movie Name'
						onChange={movieChange}
					/>
					<input
						type='text'
						id='movieReleaseDate'
						name='movieReleaseDate'
						placeholder='Release Date'
						onChange={releaseDateChange}
					/>
					<input
						type='text'
						id='movieActors'
						name='movieActors'
						placeholder='Actors'
						onChange={actorsChange}
					/>
					<select name='moviePoster' onChange={posterChange}>
						<option value=''></option>
						<option value='http://cdn.shopify.com/s/files/1/0633/9736/3943/products/TSSW08.jpg?v=1660669214'>
							Default Image
						</option>
						<option value='https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg'>
							Shawshank Redemption
						</option>
						<option value='https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg'>
							Godfather
						</option>
						<option value='https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg'>
							The Dark Knight
						</option>
						<option value='https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg'>
							Spiderman
						</option>
					</select>

					<select name='movieRating' onChange={ratingChange}>
						<option value=''></option>
						<option value='1'>1 Star</option>
						<option value='2'>2 Stars</option>
						<option value='3'>3 Stars</option>
						<option value='4'>4 Stars</option>
						<option value='5'>5 Stars</option>
					</select>
					{/* <button className='btn'>Add Movie Review</button> */}
					<input type='submit' value='Submit' />
				</div>
			</form>
		</div>
	);
};

export default Reviews;
