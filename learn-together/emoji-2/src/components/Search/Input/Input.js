import React from 'react'
import TextField from '@material-ui/core/TextField';

const SearchInput = (props) => {
    return (
            <form className="App-Search" noValidate autoComplete="off">
                <TextField 
                    onChange={props.textChange} 
                    id="outlined-basic" 
                    label="Searching for Emjoi" 
                    variant="outlined" 
                    color="secondary"
                />
            </form>
              
          
          
    )
}

export default SearchInput