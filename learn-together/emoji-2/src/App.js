import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Search from './components/Search'
import Collection from './components/Collection'
import NavBar from './components/UI/Navbar'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <main>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path="/search" component={Search} />
            <Route path="/collection" component={Collection} />
            <Route component={Error} />
          </Switch>
        </main>
      </header>
    </div>
  );
}

export default App;
