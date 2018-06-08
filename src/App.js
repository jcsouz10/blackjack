import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11],
      randomCards: [],
      cardsPlayer: [],
      cardsDealer: [],
      valuePlayer: ''
    }
  }

  startGame = () => {
    for (let i = 0; i < this.state.cards.length; i++) {
      const randomCards = this.state.cards[Math.floor(Math.random() * this.state.cards.length)];
      this.state.randomCards.push(randomCards)
    }

    this.setState(prevState => ({
      cardsPlayer: this.state.cardsPlayer.concat(prevState.randomCards.splice(0, 2)),
      cardsDealer: this.state.cardsDealer.concat(prevState.randomCards.splice(0, 2)),
    }))


  }

  winner = () => {
    if (this.state.cardsPlayer.reduce((a, b) => a + b) === 21) {
      alert('player winner')
    }
  }

  giveCards = () => {

    if (this.state.cardsPlayer.reduce((a, b) => a + b) > 21) {
     alert('busted')
    } else if  (this.state.cardsPlayer.reduce((a, b) => a + b) < 21) { 
      alert('player winner')
    }
  }

  finishGame = () => {
    const scorePlayer = this.state.cardsPlayer.reduce((a, b) => a + b);
    const scoreDealer = this.state.cardsDealer.reduce((a, b) => a + b);

    for (let i = scoreDealer; i < scorePlayer; i++) {
      this.state.cardsDealer.push(this.state.randomCards.splice(0, 1))
    }


  }

  render() {
    console.log(this.state.cardsDealer)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BLACK JACK</h1>
          <div>
            <button className='buttons' onClick={this.startGame}> Começar </button>
            <button className='buttons' onClick={this.giveCards}> Dar as cartas </button>
            <button className='buttons' onClick={this.finishGame}> Finalizar </button>
          </div>
        </header>
        <h1> Player 1 </h1>
        <div className="App-intro">
          <div className='table'>
            {this.state.cardsPlayer.map(i => <div className="card" key={i}><p className='number'>{i}</p></div>)}
          </div>
        </div>
        <h1> Dealer </h1>
        <div className="App-intro">
          <div className='table'>
            {this.state.cardsDealer.map((i) => <div className="card" key={i}><p className='number'>{i}</p></div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
