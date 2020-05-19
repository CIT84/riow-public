import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from "../../auth/Auth"
import firebase from "../../auth/firebase"

const Footer = () => {
    const { currentUser } = useContext(AuthContext)
    let footerOutput = null
    if(currentUser) {
        footerOutput = (
          <>
            <p>Player is logged in:</p>
            <Link to="/" className="paper" onClick={() => firebase.auth().signOut()}>
                SignOut
            </Link>    
          </>
        )
    } else {
         footerOutput = (
           <>
             <p>----- Wanta Play? --------</p>
             <Link className="paper" to="/Login">
               Login
             </Link>
             <Link className="paper" to="/signup">
               || SignUp
             </Link>
             <h3>Developer: Rio Waller</h3>
           </>
         );
    }

    return (
        <>
           {footerOutput}
      </>
    )
}

export default Footer