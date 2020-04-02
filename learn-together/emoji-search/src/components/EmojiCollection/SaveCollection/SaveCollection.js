import React from 'react'
import Aux from '../../hoc/Aux'

const saveCollection = (props) => {
    
    return (
    <Aux>
      <form onSubmit={props.saveToCloud}>
        <label>Name this Emoji Collection</label>
        <input type="text" required/>
        <button >Save To Cloud</button>
        </form>
    </Aux>
    )
}

export default saveCollection