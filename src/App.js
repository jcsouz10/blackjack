import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      cards:[0,1,2,3,4,5,6,7,8,9],
      currentCard:'',
      cardsPlayer1:[],
    }
  }

  startGame = () =>{
    this.setState({
      cardsPlayer1: this.state.cardsPlayer1.concat(this.state.cards.splice(0,2))
    })
  }
  
  giveTheCards = () =>{
    const {cards} = this.state;
    
    // Dando uma carta por vez...
    this.setState({
      cardsPlayer1: this.state.cardsPlayer1.concat(this.state.cards.splice(0,1))
    })
    
    console.log(this.state.cardsPlayer1)
    
    // Verificar se deu 21...
    if(this.state.cardsPlayer1.reduce((a, b) => a + b)===3){
      alert('player one winner')
    }
    
    if(cards.includes(1)===true){
      console.log('true')
    }
  }
  
  render() {
    console.log(this.state.cardsPlayer1)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div>
            <button onClick={this.startGame}> Começar </button>
            <button onClick={this.giveTheCards}> Dar as cartas </button>
          </div>
        </header>
        <div className="App-intro">
        {this.state.cardsPlayer1.map(i=><div key={i}>{i}</div>)}
        </div>
      </div>
    );
  }
}

export default App;
