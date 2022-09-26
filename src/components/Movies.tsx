import { useEffect } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import "./movies.css";
import { useDispatch } from "react-redux";
import { addMovies, getAllMovies } from "../redux/movieSlice";
import { useSelector } from "react-redux";

//featured https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=
//image https://image.tmdb.org/t/p/w1280
//search https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=

function Movies() {
  const api_key = "c3f705a375cc9917aa3f1898222d3912";

  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`
      );
      dispatch(addMovies(response.data.results));
      console.log(response.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="moviesContainer">
      {movies.map((movie: any) => {
        return <MovieItem key={movie.id} {...movie}></MovieItem>;
      })}
    </div>
  );
}

export default Movies;
