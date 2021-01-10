import "./style.css";
import React from "react";
import PropTypes from "prop-types";

const movieLike = [
  {
    id: 1,
    name: "Mission Impossible: FALL OUT",
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg",
    rating: 4.5
  },
  {
    id: 2,
    name: "Frozen2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Frozen_2_poster.jpg/220px-Frozen_2_poster.jpg",
    rating: 4.3
  },
  {
    id: 3,
    name: "Avengers: END GAME",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "SpiderMan: Far From Home",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
    rating: 4.0
  }
];

function Movie({ name, picture, rating }) {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// Describe something that I want to get
Movie.propTypes = {

}

export default function App() {
  return (
    <div>
      {movieLike.map(ticket => (
        <Movie key={ticket.id} name={ticket.name} picture={ticket.image}
        rating={ticket.rating} />
      ))}
    </div>
  );
}
