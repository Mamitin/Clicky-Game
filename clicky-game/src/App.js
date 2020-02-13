import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Footer from "./components/Footer";

class App extends Component{
  state ={
    players,
    score: 0,
    topScore: 0,
    newTopScore: 0
  };



restartGame = () => {
  this.setState({ topScore: 0, score: 0, newTopScore: 0});
  console.log(this.state.topScore)
  players.sort((a,b) => 0.5 - Math.random());
};

onClick = id => {
  const players = this.state.friends
  const clickedPlayer = this.state.players.filter(player => player.id === id);

    if (clickedPlayer[0].click) {
      players.sort((a,b) => 0.5 - Math.random());
      this.setState({ topScore: this.state.score, score: 0, newTopScore: this.state.newTopScore });

    if (this.state.score > this.state.topScore) {
      this.setState({ newTopScore: this.state.topScore })
    }
      for (var i = 0; i < players.length; i++) {
        players[i].click = false;
    }
    alert("Try again!");
} else if (this.state.score < 12) {
  clickedPlayer[0].click = true;
    this.setState({ score: this.state.score + 1 });
    players.sort((a,b) => 0.5 - Math.random());
} else {
  this.setState({ score: 0, topScore: 0, newTopScore: 0});
  players.sort((a,b) => 0.5 - Math.random());
}
}


export default App;
