import React, { useState, useContext } from "react";
import "../App.css";

import { MovieContext } from "./MovieContext";

function Nav() {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className="nav">
      <ul>
        <li>My Movies</li>
        <li>List of Movies: {movies.length}</li>
      </ul>
    </div>
  );
}

export default Nav;
