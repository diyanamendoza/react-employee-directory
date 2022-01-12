import React from 'react'
import AuthHeader from './AuthHeader'
import Header from './Header'

export default function Layout({children}) {
    return (
        <div>
            <Header />
            <AuthHeader />
            {children}
        </div>
    )
}
