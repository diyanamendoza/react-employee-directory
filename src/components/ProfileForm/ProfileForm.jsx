import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import styles from '../../App.css'
import { useProfile } from '../../context/ProfileContext'
import { useHistory } from 'react-router-dom'



export default function ProfileForm({ handleProfile }) {
    const { user } = useAuth()
    const { profileData } = useProfile()
    const history = useHistory()
    

    const [fullname, setFullName] = useState(profileData.name || '')
    const [bio, setBio] = useState(profileData.bio || '')
    const [birthday, setBirthday] = useState(profileData.birthday || '')
    const [formError, setFormError] = useState('')

    const handleFormChange = (event) => {
      const { name, value } = event.target; 
      if(name === 'fullname') setFullName(value)
      if(name === 'bio') setBio(value)
      if(name === 'birthday') setBirthday(value)

    }

    const profileDataObj = {
      name: fullname,
      email: user.email,
      bio,
      birthday,
    }

    //incorporate handleProfile 
    const handleSubmit = async (event) => {
      event.preventDefault()
      try {
        await handleProfile(profileDataObj)
        history.replace('/')
      } catch (error) { 
        console.log(error)
        setFormError(error)
      }
    } 

    return (
        <div>
        <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend>Your Profile</legend>
          <section className={styles.formSection}>
            <label htmlFor="fullname">Full Name</label>
            <input
            required
              id="fullname"
              type="name"
              name="fullname"
              value={fullname}
              className={styles.input}
              onChange={handleFormChange}
            />
          </section>
          <section className={styles.formSection}>
            <label htmlFor="email">Email</label>
            <input
            disabled
              id="email"
              type="email"
              name="email"
              value={user.email}
              className={styles.input}
              onChange={handleFormChange}
            />
          </section>
          <section className={styles.formSection}>
            <label htmlFor="birthday">Birthday</label>
            <input
            required
              id="birthday"
              type="date"
              name="birthday"
              value={birthday}
              className={styles.input}
              onChange={handleFormChange}
            />
          </section>
          <section className={styles.formSection}>
            <label htmlFor="bio">Bio</label>
            <textarea
            required
              id="bio"
              type="text"
              name="bio"
              value={bio}
              className={styles.input}
              onChange={handleFormChange}
            />
          </section>
          <button type='submit'>Submit</button>
          {formError && <p>{formError}</p>}
        </fieldset>
      </form>
        </div>
    )
}
