import React from 'react'
import ProfileForm from '../../components/ProfileForm/ProfileForm'


export default function CreateProfile({handleProfile}) {

    return (
        <div>
            <p>You don't have a profile yet! Let's fix that.</p>
            <ProfileForm handleProfile={handleProfile}/>
        </div>
    )
}
