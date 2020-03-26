import React from 'react'
import classes from './SearchInput.module.css'

const SearchInput = (props) => {
    return (
        <div className={classes.SearchInput}>
          <div>
            <input onChange={props.textChange} placeholder="Emoji Search" />
          </div>
        </div>
      )
}

export default SearchInput