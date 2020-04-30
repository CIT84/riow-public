import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Search from './components/Search/Search'
import Collection from './components/Collection/Collection'
import Error from './components/Error/Error'
import NavBar from './components/UI/Navbar'

import './App.css';

function App() {
  
  return (
    <div className="App">
      <NavBar />
        <main>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/search' component={Search} />
            <Route path='/collection' component={Collection} />
            <Route component={Error} />
          </Switch>
        </main>
        <footer className="App-footer">Developer Rio Waller 2020</footer>
    </div>
  );
}

export default App;
