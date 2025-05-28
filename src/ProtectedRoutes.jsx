import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import React from 'react'
import Navbar from './components/Navbar'

const ProtectedRoutes = () => {
    return (
        <>
            <SignedIn>
                <Navbar />
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    )
}

export default ProtectedRoutes