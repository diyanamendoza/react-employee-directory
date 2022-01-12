import React, { useState } from 'react'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import EmployeeProfile from '../../components/Employees/EmployeeProfile'
import CreateProfile from './CreateProfile'
import { createProfile, updateProfile, deleteProfileById } from '../../services/profiles'
import styles from '../../App.css'
import { useProfile } from '../../context/ProfileContext'
import { useHistory } from 'react-router-dom'


export default function EditProfile() {
    const { profileData, setProfileData, profileStatus } = useProfile()
    const [showEditForm, setShowEditForm] = useState(false)
    const history = useHistory()
    
     
    //pass to profile form as handleProfile, to be used in handleSubmit
    const handleCreateProfile = async (profileDataObj) => {
        try {
            const [ profile ] = await createProfile(profileDataObj)
            setProfileData(profile)
        } catch (error) { console.log(error) }
    }

    //pass to profile form as handleProfile, to be used in handleSubmit
    const handleEditProfile = async (profileDataObj) => {
        try {
            //destructure profile out of the returned array
            const [ profile ] = await updateProfile(profileDataObj)
            setProfileData(profile)
        } catch (error) { console.log(error) }
    }

    const handleDeleteProfile = async (profileData) => {
        try {
            await deleteProfileById(profileData.id)
            history.push('/')
        } catch (e) { console.log(e) }
    }

    return (
        <div>
            {profileStatus ? 
                (
                <div className={styles.hasProfile}>               
                    <EmployeeProfile employee={profileData} />
                    <button onClick={() => setShowEditForm(!showEditForm)}>Edit Profile</button>
                    {showEditForm && <ProfileForm handleProfile={handleEditProfile} />}
                    <button onClick={() => handleDeleteProfile(profileData)}>Delete Profile</button>
                </div>    
                )
            :
                (
                <div className={styles.noProfile}>
                    <CreateProfile handleProfile={handleCreateProfile} />
                </div>
                )
            }

        </div>
    )
}
