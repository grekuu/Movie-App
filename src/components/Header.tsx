import "./header.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addMovies } from "../redux/movieSlice";

function Header() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const api_key = "c3f705a375cc9917aa3f1898222d3912";

  function handleSearch(event: any) {
    if (event.key === "Enter") {
      const fetchMovies = async () => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchValue}`
        );
        dispatch(addMovies(response.data.results));
      };
      fetchMovies();
    }
  }
  return (
    <div className="header">
      <div className="header-left">
        <h3>Movie App</h3>
      </div>
      <div className="header-right">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleSearch}
        />
        <button className="searchBtn" onClick={handleSearch}>
          <svg
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
{
}
