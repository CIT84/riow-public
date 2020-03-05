import React from 'react'


const playerStats = (props) => (
    <div>
        <div>Games {props.total} ::
            <strong className="rock"> Wins </strong> {props.w} :: 
            <strong className="scissors"> Lose </strong> {props.l} :: 
            <strong className="paper"> Tie </strong> {props.t}
        </div>
    </div>
)


export default playerStats