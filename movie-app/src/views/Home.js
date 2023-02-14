import { useState, useEffect } from "react";
import Movies from "../components/Movies";

const Home = () => {
	const [movies, setMovies] = useState();

	useEffect(() => {
		fetch("./movie-data.JSON")
			.then((response) => response.json())
			.then(setMovies)
			.catch((error) => console.log("This Error " + error));
	}, []);

	console.log(movies);

	return <Movies movies={movies} />;
};

export default Home;