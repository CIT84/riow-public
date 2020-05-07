import React, { useState, Fragment} from 'react'
import FilterEmoji from './FilterEmoji/FilterEmoji'
import ShowResults from './ShowResults/ShowResults'
import Input from './Input/Input'

function Search() {
    const [state, setState] = useState({
        filteredEmoji: FilterEmoji("", 200)
    })

    const handleSearchChange = event => {
        if(event.target.value.length === 0) {
            setState({ 
                filteredEmoji: FilterEmoji("", 200)})
        } else {
            setState({
                filteredEmoji: FilterEmoji(event.target.value, 20)
            })
        }
    }
    
    return (
        <Fragment>
            <Input textChange={handleSearchChange} />  
            <ShowResults emojiData={state.filteredEmoji} />
        </Fragment>
    )
}

export default Search