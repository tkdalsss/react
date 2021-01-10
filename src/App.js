import "./style.css";
import React from "react";
import PropTypes from "prop-types";

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

export default class App extends React.Component{
  state={
    isLoading: true,
    movies: []
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false, book:true});
    }, 2000);
  };
  render(){
    const {isLoading} = this.state;
    return(
      <div>{isLoading ? "Loading.." : "We are ready"}</div>
    );
  }
}