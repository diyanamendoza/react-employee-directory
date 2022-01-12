//MOCK AUTH CONTEXT

import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ mockUser, children }) => {
    const [user, setUser] = useState(mockUser ? { id: mockUser.id, email: mockUser.email } : '')
    const value = useMemo(() => ({ user, setUser }), [user])
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined) { throw new Error('useAuth not used within Auth Provider')}
    return context
}

export { AuthContext, AuthProvider, useAuth }