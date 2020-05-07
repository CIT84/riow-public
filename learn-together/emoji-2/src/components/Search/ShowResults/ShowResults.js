import React, { useState, Fragment } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ShowRow from './ShowRow/ShowRow'
import firebase from '../../../auth/firebase'

const ShowResult = (props) => {
    const [emojiCollection, setEmojiCollection] = useState([])
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    
    const setupFirebase = () => {
        const db = firebase.firestore()
        const uid = firebase.auth().currentUser.uid
        const docRef = db.collection("emoji").doc(uid)
        return ([docRef])
    }
    
    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = (e) => {
        setOpen(false)
        const [docRef] = setupFirebase()
        docRef.collection('collection').add({
            collection: name, emojis: emojiCollection
        })
        .then(ref => console.log('adding doc id: ', ref.id))
        .catch(error => console.log(error))
        setEmojiCollection([])
        setName('')
    }

    const handleAddToCollection = (emoji) => {
        const newEmojiCollection = [...emojiCollection]
        newEmojiCollection.push(emoji)
        setEmojiCollection(newEmojiCollection)
    }

    let emojiOutput
    let emojiButton
    
    if (emojiCollection.length === 0) {
        emojiOutput = <h1>Click To Start a Collection</h1>
    } else {
        emojiOutput = emojiCollection.map((emoji, index) => (
            <span key={index}>{emoji}</span>
        ))
        emojiButton = (
            <div>
                <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={handleClickOpen}>
                    Save Collection
                </Button>
                <Dialog 
                    open={open} 
                    onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle 
                            id="form-dialog-title"
                            >Saving Emoji Collection
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                This will save the data to the Firebase
                            </DialogContentText>
                        <TextField
                            autoFocus
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            margin="dense"
                            id="name"
                            label="Name this collection"
                            type="collection"
                            fullWidth
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Reset
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Save
                        </Button>
                        </DialogActions>
                    </Dialog>
    </div>)
    }

    return (
        <Fragment>
            <div className="App-heading">
                {emojiOutput}
                {emojiButton}
            </div>
            {props.emojiData.map(emojiData => (
                <ShowRow
                    key={emojiData.title}
                    symbol={emojiData.symbol}
                    title={emojiData.title}
                    click={emoji => handleAddToCollection(emoji)}
                    keywords={emojiData.keywords}
                />
            ))}
        </Fragment>
    );
}

export default ShowResult