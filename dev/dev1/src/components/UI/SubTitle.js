import React from 'react'

const SubTitle = (props) => {
    return (
    <h1>
        <span className="rock">To </span>
        <span className="scissors">Play</span>
         <span className="paper"> {props.subtxt}</span>
    </h1> 
    )
}

export default SubTitle