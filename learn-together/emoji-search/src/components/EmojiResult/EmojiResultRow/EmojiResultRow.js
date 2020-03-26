import React from 'react'
import classes from './EmojiResultRow.module.css'

const EmojiResultRow = (props) => {
    const codePointHex = props.symbol.codePointAt(0).toString(16)
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`
    
    return (
        <div className={classes.EmojiResultRow} onClick={()=>props.click(props.keywords, src)}>
          <img alt={props.title} src={src} />
          <span className={classes.title}>{props.title}</span>
        </div>
      );
}

export default EmojiResultRow