import React, { useState, useCallback, useContext} from 'react'
import { withRouter, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import firebase from './firebase'
import { AuthContext } from './Auth'
import SubTitle from '../components/UI/SubTitle'
import Input from '../components/UI/Input'


const Login = ({ history }) => {
    const [error, setError] = useState(null)

    const handleLogin = useCallback(
        async event => {
            event.preventDefault()
            const { email, password } = event.target.elements
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                email.value = ''
                password.value=''
                history.push("/search")
            } catch (error) {
                setError(error.message)
            }
        }, [history]
    )

    const { currentUser } = useContext(AuthContext)
    if (currentUser) {
        return <Redirect to="/search" />
    }

    const clearErrorHandle = () => {
        setError(null)
    }

    return (
        <div>
            <SubTitle 
                subtxt={"login to save your emoji collections"} 
            />
            <form className="form" onSubmit={handleLogin}>
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
                
                    <button type="submit">Login</button>
            </form>
            {error !== null && (
                <div className="formError">{error}</div>
            )}
            <Link 
                className="paper" 
                to="/signup"
                >|| New? SignUp
            </Link>
        </div>
    )
} 

export default withRouter(Login)