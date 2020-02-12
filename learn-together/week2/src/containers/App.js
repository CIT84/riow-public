import React, { Component } from 'react';
import styles from './App.module.css';

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/WithClass'
import Aux from '../hoc/Aux'
import AuthContext from '../context/auth-context'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
    
  }
  state = {
    persons: [
      { id:'123', name: 'Rio', age: 56 },
      { id:'345', name: 'Jane', age: 5 },
      { id:'789', name: 'Jack',  age: 100 }
    ],
    showPersons: false,
    authenicated: true
  }
  static getDerivdedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps')
    return state
  }

  componentDidMount() {
    console.log('App.js componentDidMount' )
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

  loginHandler = () => {
    this.setState({authenicated: true})
}

  render() { 
    
    console.log('App.js Render')
    let persons = null
    if(this.state.showPersons) {
      
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}

             />
      )
          
    }
   
    return (
      
      <Aux>
        <AuthContext.Provider value={{
          authenicated: this.state.authenicated,
          login: this.loginHandler
        }}>
      <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length}
        clicked={this.togglePersonsHandler}
        login={this.loginHandler}

      />
        {persons}
        </AuthContext.Provider>
        </Aux>
    )
  }
}

export default withClass(App, styles.App);