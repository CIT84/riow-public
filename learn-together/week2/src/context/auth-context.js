import React from 'react'

const authContext = React.createContext({
    authenicated: false,
    login: () => {}
})

export default authContext