import React from 'react'
import eimg from '../assets/cover.png'

function Home() {
    return (
        <div className="App">
                <h1 className="App-heading">Emoji Search</h1>
                <img src={eimg} className="App-home-png" alt="emoji search" />
        </div>
    )
}

export default Home;
