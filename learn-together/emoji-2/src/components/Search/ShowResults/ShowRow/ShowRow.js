import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const ShowRow = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
        props.click(props.symbol)
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    const codePointHex = props.symbol.codePointAt(0).toString(16)
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`
    
    const output = props.title + ' added to unsaved collection'

    return (
            
            <div className="App-ShowResults">
            <Button 
                variant="outlined"  
                color="secondary" 
                onClick={handleClick}
                >
                <img 
                    alt={props.title} 
                    src={src} />
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
            </div>

    )
}

export default ShowRow