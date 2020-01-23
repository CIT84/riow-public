import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Rio', age: 56},
      {name: 'Jane', age: 5}
    ]
  } 

  switchNameHandler = () => {
    this.setState({persons: [
      {name: 'RioW', age: 56},
      {name: 'Jane', age: 4}
    ]})
  }
  

  render () {
    return (
      <div className="App">
       <h1>Hello From React</h1>
       <p>Having fun</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>content </Person> 
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      </div>
    )
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello') )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
