import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../App.css'
import { useAuth } from '../../context/AuthContext'
import { signOutUser } from '../../services/users'
import { useHistory } from 'react-router-dom'


export default function AuthHeader() {
    const { user, setUser } = useAuth()
    const history = useHistory()

    return (
        <div className={styles.authheader}>
            {user ? (
            <div className={styles.authheaderin}>
            <p>Signed in as {user.email}</p>
            <button type='button' onClick={async () => {
                await signOutUser()
                setUser('')
                history.replace('/')
            }}>Logout</button></div>) 
            : (<Link to='/'><button type='button' aria-label='Sign In'>Sign In/Up</button></Link>) }
        </div>
    )
}
