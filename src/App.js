import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [2,3,4,5,6,7,8,9,10,11,2,3,4,5,6,7,8,9,10,11,2,3,4,5,6,7,8,9,10,11,2,3,4,5,6,7,8,9,10,11],
      randomCards: [],
      cardsPlayer: [],
      startCardsDealer: [null],
      cardsDealer: [],
      winner: false,
      cardsDealerStart: false
    }
  }

  startGame = () => {
    // Essa função, é para embaralhar o baralho (cards para randomCards).
    for (let i = 0; i < this.state.cards.length; i++) {
      const randomCards = this.state.cards[Math.floor(Math.random() * this.state.cards.length)];
      this.state.randomCards.push(randomCards)
    }

    //Após dar duas cartas para cada jogador (Dealer e Player).
    this.setState(prevState => ({
      cardsPlayer: this.state.cardsPlayer.concat(prevState.randomCards.splice(0, 2)),
      cardsDealer: this.state.cardsDealer.concat(prevState.randomCards.splice(0, 1)),
      startCardsDealer: this.state.startCardsDealer.concat(prevState.randomCards.splice(0, 1)),
      cardsDealerStart: true
    }))


  }

  giveCards = () => {
    // Dar as cartas.
    this.setState(prevState => ({
      cardsPlayer: this.state.cardsPlayer.concat(prevState.randomCards.splice(0, 1)),
      cardsDealer: this.state.cardsDealer.concat(prevState.randomCards.splice(0, 1)),
    }))
  }

  countScorePlayer = () => {
    //Faz a duas verificações:
    // A primeira, é no incio do jogo, se ao dar as cartas, o Player obteve 21 pontos (Winner)
    // A segunda, é se ao pedir mais cartas ele ultrapassou de 21 pontos (Busted)
    // Se nenhuma dessas forem true, então o jogo continua normalmente.
    let scorePlayer = 0;
    for (var i = 0; i < this.state.cardsPlayer.length; i++) {
      scorePlayer += this.state.cardsPlayer[i];
    }
    if (scorePlayer > 21) {
      alert('busted')
    } else if (scorePlayer === 21) {
      alert('winner')
    }
    return scorePlayer;
  }


  countScoreDealer = () => {
    //Contar os pontos do Dealer
    let scoreDealer = 0;

    for (var i = 0; i < this.state.startCardsDealer.length; i++) {
      scoreDealer += this.state.startCardsDealer[i];
    }

    return scoreDealer
  }


  teste = () =>{
     this.setState({
      startCardsDealer: this.state.startCardsDealer.splice(1, 1).concat(this.state.cardsDealer)
    })
  }

  concatAllCardsDealer = () => {
    this.setState({
      startCardsDealer: this.state.startCardsDealer.concat(this.state.cardsDealer)
    })

  }

  countWinner = () => {
    //Faz a verificação de quem ganhou.
    let scoreDealer = 0;
    let scorePlayer = 0;

    for (var i = 0; i < this.state.startCardsDealer.length; i++) {
      scoreDealer += this.state.startCardsDealer[i];
    }

    for (var o = 0; o < this.state.cardsPlayer.length; o++) {
      scorePlayer += this.state.cardsPlayer[o];
    }

    if (scoreDealer < scorePlayer) {
      this.giveCardsToDealer()
    } else if (scoreDealer > scorePlayer && scoreDealer <= 21) {
      alert('Dealer Winner')
    } else if (scoreDealer === scorePlayer) {
      alert('nobody winner')
    } else if (scoreDealer > 21) {
      alert('Player Winner')
    }
  }



  finishGame = () => {
    this.concatAllCardsDealer();
    
    this.setState({
      winner: true,
      cardsDealerStart: false
    })
    
    this.teste();
    console.log(this.state.startCardsDealer)
  }

  
  giveCardsToDealer = () => {
    let scoreDealer = 0;
    let scorePlayer = 0;

    for (var i = 0; i < this.state.startCardsDealer.length; i++) {
      scoreDealer += this.state.startCardsDealer[i];
    }

    for (var o = 0; o < this.state.cardsPlayer.length; o++) {
      scorePlayer += this.state.cardsPlayer[o];
    }

    if (scoreDealer < scorePlayer) {
      this.setState(prevState => ({
        cardsDealer: this.state.cardsDealer.concat(prevState.randomCards.splice(0, 1)),
      }))
      this.concatAllCardsDealer()
    }
  }

  render() {
    console.log(this.state.startCardsDealer)
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
            {this.countScorePlayer()}
          </div>
        </div>
        <h1> Dealer </h1>
        <div className="App-intro">
          <div className='table'>
            {this.state.winner && this.countScoreDealer()}
            {this.state.winner && this.countWinner()}
            {this.state.winner && this.state.startCardsDealer.map((i) => <div className="card" key={i}><p className='number'>{i}</p></div>)}

            {this.state.cardsDealerStart && this.state.startCardsDealer.map(i => <div className='card'><p className='number'> {i} </p></div>)}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
