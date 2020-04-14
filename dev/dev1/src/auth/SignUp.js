import React, { useCallback, useState } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import firebase from './firebase'

const SignUp = ({ history }) => {
    const [error, setError] = useState(null)
    const handleSignUp = useCallback(async event => {
        event.preventDefault()
        const { email, password, playername } = event.target.elements
        try {
            await firebase
              .auth()
              .createUserWithEmailAndPassword(email.value, password.value)
              .then((results) => {
                const db = firebase.firestore()
              
                db.collection("players").doc(`${results.user.uid}`).set({
                    playerInfo: {
                        playerame: playername.value,
                        playeremail: email.value

                    }
                })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
              }).then(()=>{
                  console.log('data written to database')
                  email.value = ''
                  password.value=''
                  playername.value=''
                  history.push("/Game")

              })
              
        } catch (error) {
            setError(error.message)
           
        }

    }, [history])

  
    const clearErrorHandle = () => {
        setError(null)
    }

    return (
        <div>
        
           <h1><span className="rock">To </span><span className="scissors">Play</span> <span className="paper">SignUp</span></h1>
           <form className="form" onSubmit={handleSignUp} >
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
                        name="password" 
                        type="password" 
                        placeholder="Password"
                        onInput={clearErrorHandle}
                        className="formInput"
                        required />              
                </div>
                <div className="formItems">
                <label className="scissors formLabel"> & Player Name</label>
                    <input 
                        name="playername" 
                        type="text"
                        placeholder="Player Name"
                        onInput={clearErrorHandle}
                        className="formInput"
                        required />              
                </div>
                
                <button type="submit">Sign Up</button>
               
            </form> 
            {error !== null && (
                <div className="rock formError">{error}</div>
            )}
            <Link className="paper" to="/login">|| Returning ? Login</Link>
        </div>
    )
}

export default withRouter(SignUp)
