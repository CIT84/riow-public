import React, { useState, useEffect, useRef } from 'react'
import rock from '../../assets/rock.jpg'
import paper from '../../assets/paper.jpg'
import scissors from '../../assets/scissors.jpg'
import firebase from '../../auth/firebase'
import Modal from '../../components/UI/Modal'
import Title from '../../components/UI/Title'

const Game = () => {
    const [user, setUser] = useState({})
    const [game, setGame] = useState([])
    const [stats, setStats] = useState([0,0,0,0])

    const modalRef = useRef()

    const setupFirebase = () => {
        const db = firebase.firestore()
        const uid = firebase.auth().currentUser.uid
        const docRef = db.collection("players").doc(uid)
        return ([db, uid, docRef])
    }

    useEffect(()=>{
        const [db, uid, docRef] = setupFirebase()
        docRef.get().then((doc) =>{
            const playername = doc.data().playerInfo.playerame
            setUser({playername: playername, uid: uid})
        })
        updateStats(db, uid)
        
    }, [])

    useEffect(()=>{
        const [db, uid, docRef] = setupFirebase()
        if(game.result) {
            console.log('updating datatbase')
            docRef.collection('games').add({
                result: game.result,
                playerChoice: game.playerChoice,
                gameChoice: game.gameChoice,
                output: game.gameOutput
            })
            .then(ref => {
                console.log('adding doc id:' , ref.id)
            })
            .catch(error => {
                console.log('error', error)
            })
            updateStats(db, uid)
        }
        
    },[game])
    
    const updateStats = (db, uid) => {
        let total=0
        let wins=0
        let loss=0
        let tie=0 
        let docRef = db.collection("players").doc(uid)
        let newref = docRef.collection("games")
        newref.get().then(snapshot => {
           snapshot.forEach((game)=> {
               total+=1
               if(game.data().result === 'Win') {
                wins+=1
               } else if (game.data().result === 'Loss') {
                   loss+=1
               } else if (game.data().result === 'Tie') {
                   tie+=1
               }
          
           setStats([total, wins, loss, tie])
       })
    }).catch(error => {
        console.log(error)
    })
}

    const handleUserSelection = (e) => {
        const gameChoice = getGameChoice(Math.floor(Math.random() * (2 - 0 + 1)) + 0)
        const playerChoice = e.target.name
        const gameObj = getRPSResult(gameChoice, playerChoice)
        setGame(gameObj)
        modalRef.current.openModal()
    }

    const getRPSResult = (gameChoice, playerChoice) => {
        let result = null
        let gameObj = null
        let gameOutput = null
        if (playerChoice === gameChoice) {
            gameOutput = `${playerChoice} for both Player and Game- Tie`
            result='Tie'
        } else if (playerChoice === 'Rock') {
            if (gameChoice === 'Scissors') {
              gameOutput = 'Rock beats Scissors - Player Wins'
              result='Win'
            } else {
              gameOutput = 'Scissors beats Paper - Game Wins'
              result='Loss'
            }
        } else if (playerChoice === 'Paper') {
            if (gameChoice === 'Rock') { 
                gameOutput = 'Paper beats Rock - Player Wins'
                result='Win'
            } else {
                gameOutput = 'Scisster cuts Paper - Game Wins'
                result='Loss'
            }
        } else if (playerChoice === 'Scissors') {
            if (gameChoice === 'Paper') {
                gameOutput = 'Scissors Cut Paper - Player Wins'
                result='Win'
            } else {
                gameOutput = 'Rock crushes Scissors - Game Wins'
                result='Loss'
            }
        }
        gameObj = {
          result: result,
          playerChoice: playerChoice,
          gameChoice: gameChoice,
          gameOutput: gameOutput
        }
    
        return gameObj
    
      }  
    const  getGameChoice = (choiceInt) => {
        if (choiceInt === 0) {
            return 'Rock'
        } else if (choiceInt === 1) {
            return 'Scissors'
        } else {
            return 'Paper'
        }
      }
   
    
    return (
        <>
            <Title />
            <h1>
                <span className="rock">Hello</span> 
                <span className="scissors">{user.playername}</span>
            </h1> 
            <button className="btn" onClick={() => firebase.auth().signOut()}>Sign Out</button>
            <div>
                <img src={rock} alt="rock" name="Rock" onClick={handleUserSelection} />
                <img src={scissors} alt="scissors" name="Scissors" onClick={handleUserSelection} />
                <img src={paper} alt="paper" name="Paper" onClick={handleUserSelection} />
                <Modal ref={modalRef}> 
                    <h1 className="rock">{game.gameOutput}</h1>
                    <button className="btn" onClick={()=> modalRef.current.closeModal()}>Play Again?</button>
                </Modal>
            </div>  
            <div>
                
                <h1 className="scissors">GAME STATS</h1>
                <h1>
                    <span>TOTAL : </span>{stats[0]}
                    <span className="rock"> Loss : </span> {stats[1]}
                    <span className="scissors"> Loss : </span>{stats[2]}
                    <span className="paper"> Tie : </span>{stats[3]}
                </h1>
            </div>
        </>
    )

}

export default Game