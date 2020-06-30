import React from 'react'

const AuthContext = React.createContext({
    id: null,
    authenticate: () => {},
})

export default AuthContext
