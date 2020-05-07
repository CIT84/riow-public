import React from 'react'
import eimg from '../assets/cover.png'

function Home() {
    return (
        <div>
            <h1>Find and Save Emojis!</h1>
            <img 
                src={eimg} 
                className="App-home-png" 
                alt="emoji search" 
            />
        </div>
    )
}

export default Home;
