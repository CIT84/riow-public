import React from 'react'
import Aux from '../../hoc/Aux'

const emojiView = (props) => {
   
    return (
        <Aux>
            <img alt={props.selectedEmoji[0]} src={props.selectedEmoji[1]}/>
            <h3>{props.selectedEmoji[0]}</h3>
            <button onClick={()=>props.addToCollection(props.selectedEmoji[1])}>Add to Collection</button>
        </Aux>
    )
}

export default emojiView