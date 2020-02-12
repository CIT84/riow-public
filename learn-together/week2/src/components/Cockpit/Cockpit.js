import React, { useEffect, useRef } from 'react'
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'


const Cockpit = (props) => {
  const toggleBtnRef = useRef(null)

  useEffect(() => {
    console.log('[Crockpit] use Effect')
    toggleBtnRef.current.click()
    // setTimeout(() => {
    //   alert('Saved data to cloud')
    // }, 1000)
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, [])

  let assignedClasses = []
  let btnClass = ''
  if (props.showPerson) {
    btnClass = classes.Red
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red)
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className="Crockpit">
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>Having fun</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons</button>
        <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log In</button>} 
        </AuthContext.Consumer>
    </div>
  )

}

export default React.memo(Cockpit)