import React from 'react'
import classes from './ChangePlayer.module.css'

const changePlayer = (props) => (
    <div className={classes.ChangePlayer} >

    <button onClick={props.newPlayer}>Change Player</button>
    </div>
)

export default changePlayer