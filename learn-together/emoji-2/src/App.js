import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search/Search'
import Collection from './components/Collection/Collection'
import Error from './components/Error/Error'
import Login from './auth/Login'
import SignUp from './auth/SignUp'

import NavBar from './components/UI/Navbar'
import { AuthProvider } from './auth/Auth'
import PrivateRoute from './auth/PrivateRoute'

import './App.css';

function App() {
  
  return (
    <AuthProvider>
    <div className="App">
      <NavBar />
        <main>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/login' component={Login} exact/>
            <Route path='/signup' component={SignUp} exact/>
            <PrivateRoute path='/search' component={Search} />
            <PrivateRoute path='/collection' component={Collection} />
            <Route component={Error} />
          </Switch>
        </main>
        <footer className="App-footer">Developer Rio Waller 2020</footer>
    </div>
    </AuthProvider>
  )
}

export default App;
