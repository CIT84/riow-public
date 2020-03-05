import React, { Component } from 'react'
import './App.css';
import PlayerInput from '../components/PlayerInput/PlayerInput'
import Game from '../components/Game/Game'
import uuidv4 from 'uuid/v4'


class App extends Component {
  state = {
    currentPlayer: '',
    gameHistory: [],
    classes: ['playerInput'],
    showGame: false
    
  }

  handlePlayerInput = (e) => {
    let classes = [...this.state.classes]
    let player = this.state.currentPlayer
    let showGame = this.state.showGame
    if(e.target.value.length <=  3 && this.state.classes.length === 1) {
      classes.push("playerInput--error")
      
    } else if(e.target.value.length >=4 ) {
      classes.splice(1, 1)
      player = e.target.value
      showGame = true
    }
    this.setState({
      classes: classes, 
      currentPlayer: player,
      showGame: showGame
    })
    
  }

  changePlayerHander = (e) =>{
    this.setState({showGame: false})
  }


  handleUserSelection = (e) => {
    const gameChoice = this.getGameChoice(this.getRandomInterger(0, 2))
    const playerChoice = e.target.name
    console.log(gameChoice, playerChoice)
    const gameObj = this.getRPSResult(this.state.currentPlayer, gameChoice, playerChoice)
    const history = [...this.state.gameHistory]
    history.push(gameObj)
    console.log(history)
    this.setState({gameHistory: history})
  }

  getRPSResult = (player, gameChoice, playerChoice) => {
    let result = null
    let gameObj = null
    let gameOutput = null
    if (playerChoice === gameChoice) {
        gameOutput = `${playerChoice} for both Player and Game- Tie`
        result='Tie'
    } else if (playerChoice === 'Rock') {
        if (gameChoice === 'Scissors') {
          gameOutput = 'Rock beats Scissors - Player Wins'
          result='Win'
        } else {
          gameOutput = 'Scissors beats Paper - Game Wins'
          result='Loss'
        }
    } else if (playerChoice === 'Paper') {
        if (gameChoice === 'Rock') { 
            gameOutput = 'Paper beats Rock - Player Wins'
            result='Win'
        } else {
            gameOutput = 'Scisster cuts Paper - Game Wins'
            result='Loss'
        }
    } else if (playerChoice === 'Scissors') {
        if (gameChoice === 'Paper') {
            gameOutput = 'Scissors Cut Paper - Player Wins'
            result='Win'
        } else {
            gameOutput = 'Rock crushes Scissors - Game Wins'
            result='Loss'
        }
    }
    gameObj = {
      id: uuidv4(),
      player: player,
      result: result,
      playerChoice: playerChoice,
      gameChoice: gameChoice,
      gameOutput: gameOutput
    }

    return gameObj

  }

  getRandomInterger =  (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  
  getGameChoice = (choiceInt) => {
    if (choiceInt === 0) {
        return 'Rock'
    } else if (choiceInt === 1) {
        return 'Scissors'
    } else {
        return 'Paper'
    }
  }

  render() {
    let game = null
    let getPlayer =null
    let playerGames = this.state.gameHistory.filter((game) => {
      return game.player === this.state.currentPlayer
    })

    if(this.state.showGame) {
        game = (<Game 
          games={playerGames}
          player={this.state.currentPlayer}
          onclick={this.handleUserSelection}
          changePlayer={this.changePlayerHander} />)  
    } else {
        getPlayer = (
        <PlayerInput 
          onblur={this.handlePlayerInput} 
          assignedClasses={this.state.classes} 
          /> 
        )
    }
  
    return (
      <div className="App">
        <header className="App-header">
        {getPlayer}
        {game}
        </header>
      </div>
    )
  }
}


export default App;
