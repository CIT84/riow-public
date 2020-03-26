import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.Header}>
          <img
            src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
            width="32"
            height="32"
            alt=""
          />
          Emoji Search
          <img
            src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
            width="32"
            height="32"
            alt=""
          />
        </header>
      );
}

export default Header