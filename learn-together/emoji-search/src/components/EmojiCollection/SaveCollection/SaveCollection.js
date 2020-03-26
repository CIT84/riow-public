import React from 'react'
import Aux from '../../hoc/Aux'

const saveCollection = (props) => {
    
    return (
    <Aux>
        <label>Name this Emoji Collection</label>
        <input type="text"></input>
        <button onClick={props.saveToCloud}>Save To Cloud</button>
    </Aux>
    )
}

export default saveCollection