import React, { Component } from 'react';
import styles from './App.module.css';

import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id:'123', name: 'Rio', age: 56 },
      { id:'345', name: 'Jane', age: 5 },
      { id:'789', name: 'Jack',  age: 100 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=> {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value 
    const persons = [...this.state.persons]

    persons[personIndex] = person
    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() { 
    let btnClass = ''

    let persons = null
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              />
          })}

        </div> 
      )
          btnClass= styles.Red
    }

    let assignedClasses =[]
    if(this.state.persons.length <= 2) {
      assignedClasses.push(styles.red)
    } 

    if(this.state.persons.length <= 1) {
      assignedClasses.push(styles.bold)
    }

    return (
     
      <div className={styles.App}>
        <h1>Hello From React</h1>
        <p className={assignedClasses.join(' ')}>Having fun</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
     
    )
  }
}

export default App;