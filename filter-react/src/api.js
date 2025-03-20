import axios from "axios";

export const fetchMovies = async () => {
    return axios
        .get("http://localhost:5173/movies.json")
        .then((res) => res.data)
        .catch((err) => console.log("Error fetching movies", err));
};