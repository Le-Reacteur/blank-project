import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Movie from "./components/Movie";

class App extends Component {
  render = () => {
    return (
      <div>
        <Title>Movies</Title>
        <Movie name={"Star Wars"} isFavorite={false} />
        <Movie name={"Back to the Future"} isFavorite={true} />
        <Movie name={"The Matrix"} isFavorite={false} />
        <Movie name={"Inception"} isFavorite={false} />
        <Movie name={"Interstellar"} isFavorite={true} />
      </div>
    );
  };
}

export default App;
