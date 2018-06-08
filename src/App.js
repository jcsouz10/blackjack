import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      cards:[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11],
      cardsPlayer:[],
      cardsDealer:[],
      teste: [],
    }
  }
  
  startGame = () =>{
    this.setState({
      cardsPlayer: this.state.cardsPlayer.concat(this.state.cards.splice(0,2)),
      cardsDealer: this.state.cardsDealer.concat(this.state.cards.splice(0,2)),
    })   


  }

  verficatedPlayerWin = () =>{
    if(this.state.cardsPlayer.reduce((a, b) => a + b)===2){
      alert('player winner')
    }
  }

  
  giveTheCards = () =>{
    // Dando uma carta por vez...
    this.setState({
      cardsPlayer: this.state.cardsPlayer.concat(this.state.cards.splice(0,1))
    }) 
 
    // Verificar se deu 21...
    if(this.state.cardsPlayer.reduce((a, b) => a + b)===21){
      alert('player winner')
    }
  }

  teste = () =>{
    this.setState({
      cardsDealer: this.state.cardsDealer.concat(this.state.cards.splice(0,1))
    }) 
  }

  finishGame = () =>{
    // Fazer o reducer do dealer e do player e ver qual foi o maior, se o player ou o dealer fizeram 21 um antes do outro
    const scorePlayer = this.state.cardsPlayer.reduce((a, b) => a + b);

    const scoreDealer = this.state.cardsDealer.reduce((a, b) => a + b);
    

    if(scorePlayer<scoreDealer){
      for (let i = scoreDealer; scorePlayer < scoreDealer; i++){
            if (i === 3) { break; }
            console.log('foi')
      }
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
            <button  className='buttons' onClick={this.startGame}> Começar </button>
            <button  className='buttons' onClick={this.giveTheCards}> Dar as cartas </button>
            <button className='buttons' onClick={this.finishGame}> Finalizar </button>
          </div>

        </header>
           <h1> Player 1 </h1>
        <div className="App-intro">
          <div className='table'> 
            {this.state.cardsPlayer.map(i=><div className="card" key={i}><p className='number'>{i}</p></div>)}
          </div>
        </div>
        <h1> Dealer </h1>
        <div className="App-intro">
          <div className='table'> 
            {this.state.cardsDealer.map(i=><div className="card" key={i}><p className='number'>{i}</p></div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
