import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import ShowRow from './ShowRow/ShowRow'

const ShowResult = (props) => {
    const [emojiCollection, setEmojiCollection] = useState([])
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setEmojiCollection([])
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleDelete = () => {
        setEmojiCollection([])
    }

    const handleAddToCollection = (emoji) => {
        const newEmojiCollection = [...emojiCollection]
        newEmojiCollection.push(emoji)
        setEmojiCollection(newEmojiCollection)
    }

    let emojiOutput
    let emojiButton
    const output = 'Emoji Collection has been saved'
    if (emojiCollection.length === 0) {
        emojiOutput = <h1>Click To Start a Collection</h1>
    } else {
        emojiOutput = emojiCollection.map((emoji, index) => (
            <span key={index}>{emoji}</span>
        ))
        emojiButton = (
            <>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleClick}
                >
                    Save
                </Button>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message={output}
                    action={
                        <>
                            <IconButton
                                size="small"
                                aria-label="close"
                                color="inherit"
                                onClick={handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </>
                    }
                >
                
                </Snackbar>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleDelete}
                    >Delete
                </Button>
            </>)
    }

    return (
        <>
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
        </>
    );
}

export default ShowResult