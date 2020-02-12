import React from 'react'
import Detail from './Detail/Detail'
import rock from '../../assets/rock.jpg'
import paper from '../../assets/paper.jpg'
import scissors from '../../assets/scissors.jpg'

const Game = (props) => {
    

    return (
        <div>
            <h1>Welcome {props.player}</h1>
            <h2>
                <span className="rock">Rock? </span> 
                <span className="paper">Paper? </span> 
                <span className="scissors">Scissors? </span>
            </h2>

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