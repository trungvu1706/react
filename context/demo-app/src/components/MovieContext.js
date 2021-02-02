import React, { useState, createContext } from "react";
import { nanoid } from "nanoid";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: "Harry Poster", price: "10$", id: nanoid() },
    { name: "Game of Throne", price: "10$", id: nanoid() },
    { name: "Clash of Titan", price: "10$", id: nanoid() },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
