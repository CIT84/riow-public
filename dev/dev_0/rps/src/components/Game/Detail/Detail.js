import React from 'react'
import Item from './Item/Item'

const Detail = (props) => {
    return props.games.map((game)=>{
        return <Item 
            output={game.gameOutput} key={game.id}
        />
    })      
}

export default Detail