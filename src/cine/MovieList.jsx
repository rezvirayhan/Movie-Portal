import { getAllMovies } from "../data/movies";
import MovieCard from "./MovieCard";

const MovieList = () => {
    const movies = getAllMovies()
    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {
                    movies.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))
                }
            </div>
        </div>
    );
};

export default MovieList;