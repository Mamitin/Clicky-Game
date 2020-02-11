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



export default App;
