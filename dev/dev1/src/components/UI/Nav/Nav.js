import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { AuthContext } from "../../../auth/Auth"
import firebase from '../../../auth/firebase'

const Nav = () => {
    const { currentUser } = useContext(AuthContext)
    let navOutput = null
    if(currentUser) {
        navOutput = (
          <>
            <li>
              <Link to="/game">Play</Link>
            </li>
            <li>
              <Link to="/lb">Leaderboard</Link>
            </li>
            <li>
              <Link to="/" onClick={() => firebase.auth().signOut()}>
                SignOut
              </Link>
            </li>
          </>
        );
    } else {
        navOutput = (
          <>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/lb">Leaderboard</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        );
    }
    return (
        <nav>
            <h1><Link to="/">RPS</Link></h1>
            <ul className="nav-links">
                {navOutput}
                
            </ul>
        </nav>
    )
}

export default Nav