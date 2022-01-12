import React, { useState } from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'
import styles from '../../App.css'
import { signInUser } from '../../services/users'
import { useAuth } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'

export default function SignIn() {
    const { setUser } = useAuth()
    const [signinError, setsigninError] = useState('')
    const history = useHistory()

    const handleLogin = async (email, pw) => {
        try {
            const user = await signInUser(email, pw)
            if(user) {
                setUser(user)
                history.replace('/')
            }
        } catch (error) {
            console.log(error)
            setsigninError(error)
        }
    }

    return (
        <section className={styles.signin}>
            <AuthForm 
                heading={'Log In'}
                handleAuth={handleLogin}
                />
            {signinError && <p>{signinError.message}</p>}
        </section>
    )
}
