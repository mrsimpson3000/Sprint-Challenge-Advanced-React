import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import PlayerCard from "./PlayerCard";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: [],
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/api/players")
      .then((response) => {
        console.log(response.data);
        this.setState({
          player: response.data,
        });
      })
      .catch((error) => {
        console.log(`There was an error: ${error}`);
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <PlayerCard player={this.state.player} />
      </>
    );
  }
}

export default App;
