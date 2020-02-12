import React, { Component } from 'react'
import Aux from     '../../../hoc/Aux'
import withClass from '../../../hoc/WithClass'
import styles from './Person.module.css'
import AuthContext from '../../../context/auth-context'


class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }
    
    static contextType = AuthContext
    // componentDidMount() {
    //     this.inputElement.current.focus()
    // }

    render() {
    console.log('Person rendering')

    return (

        <Aux>
           
            {this.context.authenicated ? <p>Authenicated</p>: <p>Please login in</p>}   
            <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age}!</p>
            <p>{this.props.children}</p>
            <input type="text" 
            //ref={(inputEl)=>{this.inputElement = inputEl}}
            ref={this.inputElementRef}
            onChange={this.props.changed} 
            value={this.props.name} />
        </Aux>

    )
}
}

export default withClass(Person, styles.Person)