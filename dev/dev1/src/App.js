import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/Pages/Home'
import About from './components/Pages/About'
import LeaderBoard from './components/Pages/LeaderBoard'

import SignUp from './auth/SignUp'
import Login from './auth/Login'
import Game from './containers/Game/Game'
import Nav from './components/UI/Nav/Nav'


import { AuthProvider } from './auth/Auth'
import PrivateRoute from './auth/PrivateRoute'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/lb" component={LeaderBoard} />

          <PrivateRoute exact path="/game" component={Game} />

          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />

        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
