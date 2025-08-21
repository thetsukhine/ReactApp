import React from 'react'
import './PublicLayout.scss'

const PublicLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            {children}
        </>
    )
}

export default PublicLayout;