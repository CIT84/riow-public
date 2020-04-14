import React, { useState, useCallback, useContext, useEffect } from 'react'
import { withRouter, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import firebase from './firebase'
import { AuthContext } from './Auth'

const Login = ({ history }) => {
    const [error, setError] = useState(null)
    const [lb, setLB] = useState([])
   
    useEffect(() => {
        const db = firebase.firestore()
        let lbArr = []
        const fetchLBData = async () => {
            const players = await db.collection("players").get()
            for (const doc of players.docs) {
                let total = 0
                let wins = 0
                let loss = 0
                let tie = 0
                let lbObj = {}
                lbObj.name = doc.data().playerInfo.playerame
                const games = await db.collection("players").doc(doc.id).collection("games").get()
                for (const doc of games.docs) {
                    total += 1
                    if (doc.data().result === 'Win') {
                        wins += 1
                    } else if (doc.data().result === 'Loss') {
                        loss += 1
                    } else if (doc.data().result === 'Tie') {
                        tie += 1
                    }
                }
                lbObj.wins = wins
                lbObj.lose = loss
                lbObj.tie = tie
                lbObj.total = total
                lbArr.push(lbObj)
                              
            }
            lbArr.sort((a, b) => parseFloat(b.wins) - parseFloat(a.wins))
            setLB(lbArr)
        }
        fetchLBData()

    }, [])

    const handleLogin = useCallback(
        async event => {
            event.preventDefault()
            const { email, password } = event.target.elements
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                history.push("/game")
            } catch (error) {
                setError(error.message)
            }
        }, [history]
    )

    const { currentUser } = useContext(AuthContext)
    if (currentUser) {
        return <Redirect to="/game" />
    }

    const clearErrorHandle = () => {
        setError(null)
    }

    return (
        <div>
            <h1><span className="rock">To </span><span className="scissors">Play</span> <span className="paper">Login</span></h1>
            <form className="form" onSubmit={handleLogin}>
                <div className="formItems">
                    <label className="scissors formLabel"> Please Input</label>
                    <input
                        onInput={clearErrorHandle}
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="formInput"
                        required />
                </div>
                <div className="formItems">
                    <label className="scissors formLabel"> & Provide</label>
                    <input
                        onInput={clearErrorHandle}
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="formInput"
                        required />
                </div>
                <div className="formItems">
                    <button type="submit">Login</button>
                </div>
            </form>
            {error !== null && (
                <div className="rock formError">{error}</div>
            )}
            <Link className="paper" to="/signup">|| New? SignUp</Link>
            <h3 className="scissors">LeaderBoard</h3>
            {lb.map((leader, index)=>(
                <div key={index}><span className="rock">Player --- </span> {leader.name} --- <span className="scissors">Wins:</span> {leader.wins}</div>
            ))} 
        </div>
    )
} 

export default withRouter(Login)