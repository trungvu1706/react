import React, { useState, useContext } from "react";
import "../App.css";
import { nanoid } from "nanoid";

import { MovieContext } from "./MovieContext";

function AddMovie() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();

    setMovies((prevMovie) => [
      ...prevMovie,
      { name: name, price: price, id: nanoid() },
    ]);

    setName("");
    setPrice("");
  };

  return (
    <div className="add_movie">
      <form onSubmit={addMovie}>
        <div className="input">
          <input
            type="text"
            placeholder="Movie name"
            name="name"
            value={name}
            onChange={updateName}
          />
        </div>

        <div className="input">
          <input
            type="text"
            placeholder="Price"
            name="price"
            value={price}
            onChange={updatePrice}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddMovie;
