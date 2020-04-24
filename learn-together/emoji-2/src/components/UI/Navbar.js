import React from 'react'
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="App-nav">
            <Button 
                size="large"
                component={NavLink} 
                to="/" 
                variant="contained" 
                
                activeStyle={{ color: 'black' }}
                exact
                >Home
            </Button>
            <Button
                size="large"
                color="secondary"
                component={NavLink}
                to="/search"
                activeStyle={{ color: 'black' }}
                variant="contained" >
                Search
            </Button>
            <Button
                size="large"
                color="secondary"
                component={NavLink}
                activeStyle={{ color: 'black' }}
                to="/collection"
                variant="contained" >
                Collection
            </Button>
        </div>
    );
};

export default Navbar