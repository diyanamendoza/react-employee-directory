import { createContext, useContext, useMemo, useState } from 'react'
import { getUser } from '../services/users'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const currentUser = getUser()
    const [user, setUser] = useState(currentUser ? { id: currentUser.id, email: currentUser.email } : '')
    const value = useMemo(() => ({ user, setUser }), [user])
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined) { throw new Error('useAuth not used within Auth Provider')}
    return context
}

export { AuthContext, AuthProvider, useAuth }