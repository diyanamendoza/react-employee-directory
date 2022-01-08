import React, { useState } from 'react'
import styles from '../../App.css'

export default function AuthForm({handleAuth, heading}) {
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [formError, setFormError] = useState('')

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        if(name === 'email') setEmail(value)
        if(name === 'pw') setPw(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            if (pw.length < 8) {
                setFormError('Password must be at least 8 characters long.')
                throw new Error}
           await handleAuth(email, pw)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend>{heading}</legend>
          <section className={styles.formSection}>
            <label htmlFor="email">Email</label>
            <input
            required
              id="email"
              type="email"
              name="email"
              value={email}
              className={styles.input}
              onChange={handleFormChange}
            />
          </section>
          <section className={styles.formSection}>
            <label htmlFor="password">Password</label>
            <input
            required
              id="password"
              type="password"
              name="pw"
              value={pw}
              className={styles.input}
              onChange={handleFormChange}
            />
          </section>
          <button type='submit'>Submit</button>
          {/* <button type="submit" disabled={loading}>
            {loading ? 'Authenticating...' : heading}
          </button> */}
          {formError && <p>{formError}</p>}
        </fieldset>
      </form>
    )
}
