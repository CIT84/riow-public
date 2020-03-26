import React from 'react'
import Aux from '../../components/hoc/Aux'
import classes from './EmojiCollection.module.css'
import Modal from '../UI/Modal/Modal'
import SaveCollection from './SaveCollection/SaveCollection'

const emojiCollection = (props) => {
    let emojiOutput
    let addToButton
    if(props.currentCollection.length === 0) {
        emojiOutput = (
            <div className={classes.EmojiCollection}>Click to start adding your Emoji Collection</div>
        ) 
    } else {
        emojiOutput = props.currentCollection.map((emoji, index) =>{
            return  (<span key={index} className={classes.EmojiCollection}><img alt={index}  src={emoji} /> </span>) 
        })
        addToButton = (
        <button onClick={props.saveTo}>Save</button>
        )

    }
    return (
        <Aux>
            {emojiOutput}
            {addToButton}
            <Modal show={props.saveCollection} modalClosed={props.modalClosed} >
                <SaveCollection saveToCloud={props.saveToCloud}/>
            </Modal>
        </Aux>
    )
}

export default emojiCollection
