import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'
import styles from '../../App.css'
import { signUpUser } from '../../services/users'
import { useHistory } from 'react-router-dom'


export default function SignUp() {
    const history = useHistory()
    const handleReg = async (email, pw) => {
        try {
            const user = await signUpUser(email, pw)
            if(user) history.replace('/confirm-email')
        } catch (error) { throw error }

    }
    
    return (
        <section className={styles.signup}>
            <AuthForm 
                heading={'Register'}
                handleAuth={handleReg}
                />
        </section>
    )
}
