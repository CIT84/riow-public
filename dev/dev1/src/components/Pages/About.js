import React from 'react'
import Title from '../UI/Title'
import Footer from "../UI/footer";

const Home = () => {

    return (
        <>  
            <Title />
            <div className="content"> 
                <p>This game is played by children and adults and is popular all over the world. Apart from being a game played to pass time, the game is usually played in situations where something has to be chosen. It is similar in that way to other games like flipping the coin</p>
                <p>Although the game has a lot of complexity to it, the rules to play it are pretty simple.
                The game is played where players deliver hand signals that will represent the elements of the game; rock, paper and scissors. The outcome of the game is determined by 3 simple rules:
                </p>
                <li>Rock wins against scissors.</li>
                <li>Scissors win against paper.</li>
                <li>Paper wins against rock.</li>
                
             
            </div>
           <Footer />
        </>
    )
}

export default Home