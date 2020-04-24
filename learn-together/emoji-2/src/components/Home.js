import React from 'react';
import eimg from '../assets/emoji.jpg'


function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to Your Home for Emoji Search! </h1>
                <img src={eimg} alt="emoji search" />
            </header>
        </div>
    );
}

export default Home;
