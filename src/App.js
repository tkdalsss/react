import "./style.css";
import React from "react";
import axios from "axios";
import Movie from "./movies";

/*const movieLike = [
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
];*/

/*class App extends React.Component{
  constructor(props){
    super(props);
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current=>({count: current.count+1}));
  };
  minus = () => {
    this.setState(current=>({count: current.count-1}));
  };
  componentDidMount(){

  };
  componentDidUpdate(){

  };
  render(){
    return (
    <div>
    <h1>The number is: {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}*/

export default class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false }); // equals {movies:movies}
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading.."
          : movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
          ))}
      </div>
    );
  }
}
