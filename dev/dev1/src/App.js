import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './auth/Home'
import SignUp from './auth/SignUp'
import Login from './auth/Login'
import Game from './containers/Game/Game'

import { AuthProvider } from './auth/Auth'
import PrivateRoute from './auth/PrivateRoute'


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
            <PrivateRoute exact path="/game" component={Game} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/" component={Home} />

        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
