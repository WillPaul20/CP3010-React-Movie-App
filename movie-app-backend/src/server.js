import express from "express";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json());
const port = 8000;

app.use(express.urlencoded({ extended: false }));

let movieData = [
	{
		id: 1,
		name: "The Shawshank Redemption",
		releaseDate: "1994-09-23",
		actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
		poster:
			"https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
		rating: 5,
	},
	{
		id: 2,
		name: "The Godfather",
		releaseDate: "1972-03-24",
		actors: "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
		poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
		rating: 5,
	},
	{
		id: 3,
		name: "The Godfather: Part II",
		releaseDate: "1974-12-20",
		actors: "Al Pacino, Robert Duvall, Diane Keaton, Robert De Niro",
		poster:
			"https://upload.wikimedia.org/wikipedia/en/0/03/Godfather_part_ii.jpg",
		rating: 5,
	},
	{
		id: 4,
		name: "The Dark Knight",
		releaseDate: "2008-07-18",
		actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
		poster:
			"https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
		rating: 5,
	},
	{
		id: 5,
		name: "Spiderman: No Way Home",
		releaseDate: "2021-12-17",
		actors: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon",
		poster:
			"https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
		rating: 4,
	},
	{
		id: 6,
		name: "Avengers: Endgame",
		releaseDate: "2019-04-26",
		actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
		poster:
			"https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
		rating: 4,
	},
];

app.get("/movies", (req, res) => {
    
	// res.json(movieData);
});

app.post("/updateMovies", (req, res) => {
	movieData.push({
		id: movieData.length + 1,
		name: req.body.name,
		releaseDate: req.body.releaseDate,
		actors: req.body.actors,
		poster: req.body.poster,
		rating: req.body.rating,
	});
	console.log(req.body);
	res.send(req.body);
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
