import React from 'react'
import Detail from './Detail/Detail'
import rock from '../../assets/rock.jpg'
import paper from '../../assets/paper.jpg'
import scissors from '../../assets/scissors.jpg'
import ChangePlayer from './ChangePlayer/ChangePlayer'
import PlayerStats from './PlayerStats/PlayerStats'


const Game = (props) => {
    let games = props.games
    
    const wins = games.filter((game)=>{
        return game.result === 'Win'
    })
    
    const loss = games.filter((game)=>{
        return game.result === 'Loss'
    })
    
    const tie = games.filter((game)=>{
        return game.result === 'Tie'
    })

    
    return (
        <div>
            <h1>Welcome {props.player}</h1>

            <ChangePlayer newPlayer={props.changePlayer} />
            <h2>
                <span className="rock">Rock? </span> 
               
                <span className="scissors">Scissors? </span>
                <span className="paper">Paper? </span> 
            </h2>
            <PlayerStats total={props.games.length} w={wins.length} l={loss.length} t={tie.length} />
            
            <div>
                <img src={rock} alt="rock" name="Rock" onClick={props.onclick} />
                <img src={paper} alt="paper" name="Paper" onClick={props.onclick} />
                <img src={scissors} alt="scissors" name="Scissors" onClick={props.onclick} />
            </div>
            
            <Detail games={props.games}/>
        </div>   
    )
}

export default Game