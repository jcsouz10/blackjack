import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      cards:[1,2,3,4,5,6,7,8,9,10,11],
      currentCard:'',
      cardsPlayer:[],
      cardsDealer:[],      
    }
  }
  
  startGame = () =>{
    this.setState({
      cardsPlayer: this.state.cardsPlayer.concat(this.state.cards.splice(0,2))
    })
  }
  
  giveTheCards = () =>{
    
    // Dando uma carta por vez...
    this.setState({
      cardsPlayer: this.state.cardsPlayer.concat(this.state.cards.splice(0,1))
    })
    
    // Fazer a lógica de A valer 11 ou se for a segunda carta valer 1
    // Q, J, K valer 10

    
 
    // Verificar se deu 21...
    if(this.state.cardsPlayer.reduce((a, b) => a + b)===21){
      alert('player one winner')
    }
  }

  finishGame = () =>{
        
  }
  
  render() {
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
            {this.state.cardsPlayer.map(i=><p className='card' key={i}><p className='number'>{i}</p></p>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
