import React from "react";
import "./style.css";

function Movie({fav}) {
  return (
    <p>I like {fav}</p>
  );
}

export default function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Movie fav="Mission Impossible" />
      <Movie fav="Frozen"/>
      <Movie fav="Avengers"/>
    </div>
  );
}
