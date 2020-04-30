import React from 'react'
import { Button, AppBar, Toolbar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <AppBar>
            <Toolbar>
                <Button
                    size="small"
                    color="secondary"
                    component={NavLink}
                    to="/"
                    activeStyle={{ color: 'white' }}
                    exact
                    >Home
                </Button>
                <Button
                    size="small"
                    color="secondary"
                    component={NavLink}
                    to="/search"
                    activeStyle={{ color: 'white' }}
                    >Search
                </Button>
                <Button
                    size="small"
                    color="secondary"
                    component={NavLink}
                    activeStyle={{ color: 'white' }}
                    to="/collection"
                    >Collection
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar