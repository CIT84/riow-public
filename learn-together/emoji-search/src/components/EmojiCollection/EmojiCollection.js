import React, { useState, useEffect } from 'react'
import Aux from '../../components/hoc/Aux'
import classes from './EmojiCollection.module.css'
import Modal from '../UI/Modal/Modal'
import SaveCollection from './SaveCollection/SaveCollection'

const EmojiCollection = (props) => {
    const [cloudData, setCloudData] = useState([])
    
    useEffect(()=>{
        fetch(
           'https://cit94-1517426142976.firebaseio.com/emoji/collections.json',
           {method: "GET"} 
        ).then(res => res.json())
         .then(response => {
             let collectionArr = []
             for (let [key, value] of Object.entries(response)) {
                let arr = []
                for (let [interkey, intervalue] of Object.entries(value)){
                  arr.push(intervalue)   
                }
                collectionArr.push({key, arr})

            }
             setCloudData(collectionArr)
         })
         .catch(error => console.log(error))
    }, [cloudData])

    let emojiCloudData
    if(cloudData.length === 0) {
        emojiCloudData = (
            <div className={classes.EmojiCollection}>No Emoji Cloud Data</div>
        )
    } else {
        emojiCloudData = cloudData.map((collection, index)=>{
            return (
            <div key={index}>
                <div className={classes.CloudItem}><a href="{collection.key}" >{collection.key}</a></div>
            </div>
            )
        })
    }
    let emojiOutput
    let addToButton
    if(props.currentCollection.length === 0) {
        emojiOutput = (
            <div className={classes.EmojiCollection}>To Start Collection - Click or Search for Emoji</div>
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
            <div className={classes.CloudData}>{emojiCloudData}</div>
            {emojiOutput}
            {addToButton}
            <Modal show={props.saveCollection} modalClosed={props.modalClosed} >
                <SaveCollection saveToCloud={props.saveToCloud}/>
            </Modal>
        </Aux>
    )
}

export default EmojiCollection
