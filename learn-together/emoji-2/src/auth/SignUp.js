import React, { useCallback, useState } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import firebase from './firebase'
import SubTitle from '../components/UI/SubTitle'
import Input from '../components/UI/Input'

const SignUp = ({ history }) => {
    const [error, setError] = useState(null)
    
    const handleSignUp = useCallback(async event => {
        event.preventDefault()
        const { email, password, username } = event.target.elements
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then((results) => {
                    const db = firebase.firestore()
                    db.collection("emoji").doc(`${results.user.uid}`).set({
                        userInfo: {
                            username: username.value,
                            useremail: email.value
                        }
                    })
                }).then(() => {
                    console.log('data written to database')
                    email.value = ''
                    password.value = ''
                    username.value = ''
                    history.push("/search")

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
            <SubTitle subtxt={"sign up to save your emoji collections"} />
            <form className="form" onSubmit={handleSignUp} >
                <Input
                    handleInput={clearErrorHandle}
                    labTxt={"Please Input"}
                    nameTxt={"email"}
                    inputType={"email"}
                    placeHoldTxt={"Email"}
                />
                <Input
                    handleInput={clearErrorHandle}
                    labTxt={"& Provide"}
                    nameTxt={"password"}
                    inputType={"password"}
                    placeHoldTxt={"Password"}
                />
                <Input
                    handleInput={clearErrorHandle}
                    labTxt={"& User Name"}
                    inputType={"text"}
                    nameTxt={"username"}
                    placeHoldTxt={"User Name"}
                />
                <button type="submit">Sign Up</button>
            </form>
            {error !== null && (
                <div className="formError">{error}</div>
            )}
            <Link className="paper" to="/login">|| Returning ? Login</Link>
        </div>
    )
}

export default withRouter(SignUp)
