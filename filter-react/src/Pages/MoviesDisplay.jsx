import { useState, useEffect } from "react";
import { fetchMovies } from "../api";

const MoviesDisplay = () => {
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState("All genres");
    useEffect(() => {
        fetchMovies()
            .then((data) => setMovies(data))
            .catch((err) => console.log(err));
    }, []);
    const filteredMovies = genre === "All genres" ? movies : movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    return (
        <div className="container">
            <h1>Welcome to Islamic Movies!</h1>
            <select value={genre} onChange={(e) => setGenre(e.target.value)} className="genre-dropdown">
                <option value="All genres">All genres</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
            </select>

            <div className="movies-container">
                {filteredMovies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <h2>{movie.title.length > 10 ? movie.title.substring(0, 17) + "..." : movie.title}</h2>
                        <img
                            className="movie-img"
                            src={`${movie.image}`}
                            alt={movie.title}
                        />
                        <div className="genre-rating">
                            <span className="genre">{movie.genre}</span>
                            <span className="rating">{movie.rating}</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MoviesDisplay;