import React, { useContext } from 'react'
import { Button, AppBar, Toolbar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';   

import { AuthContext } from '../../auth/Auth'
import firebase from '../../auth/firebase'


function Navbar() {
    const {currentUser} = useContext(AuthContext)
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleLogout = () => {
        firebase.auth().signOut()
    }
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
    setAnchorEl(null);
    }
    
    return (
        <AppBar>
            <Toolbar>
                <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                    <MenuIcon />
                </IconButton>
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
                {currentUser !== null && (
                    <div  style={{
                        marginRight:0, 
                        marginLeft: "auto"}}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                        <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
            </div>
            )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar