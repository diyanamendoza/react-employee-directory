import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { getProfile } from '../services/profiles'

export const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {
    const [profileStatus, setProfileStatus] = useState(false)
    const [profileData, setProfileData] = useState({}) 

    useEffect(() => {
        const hasProfile = async () => {
            try {
                const profileResult = await getProfile()
                if(profileResult.email) 
                    {
                    setProfileStatus(true)
                    setProfileData(profileResult)
                    }
            } catch (error) { console.log(error) }
        }
        hasProfile()
    }, [])

    const contextValue = useMemo(() => {
        return { profileStatus, profileData, setProfileData }
    }, [profileData])

    return (
        <ProfileContext.Provider value={contextValue}>{children}</ProfileContext.Provider>
    )
}

export const useProfile = () => {
    const context = useContext(ProfileContext)
    if (context === undefined) { throw new Error('useProfile hook not called inside provider')}
    return context
}