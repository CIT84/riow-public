import React from 'react'
import EmojiResultRow from './EmojiResultRow/EmojiResultRow'

const EmojiResult = (props) => {
    return (
        <div>
          {props.emojiData.map(emojiData => (
              
            <EmojiResultRow
              key={emojiData.title}
              symbol={emojiData.symbol}
              title={emojiData.title}
            
            />
          ))}
        </div>
      );
}

export default EmojiResult