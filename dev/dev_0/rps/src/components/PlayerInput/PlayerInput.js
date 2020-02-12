import React from 'react'
import Header from './Header/Header'
import './PlayerInput.css'

const PlayerInput = (props) => {

    return (
        <div>
        <Header />
        <label>To Play </label>
        <input 
            type="text" 
            placeholder="Enter Player Name HERE" 
            className={props.assignedClasses.join(' ')}
            onBlur={props.onblur} />
        </div>   
    )
}

export default PlayerInput