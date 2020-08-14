import React from 'react'

import ContentHolder from '../ContentHolder'

const LoadingSpinner = (): React.ReactElement => {
    return (
        <ContentHolder>
            <div className="spinner-border" />
        </ContentHolder>
    )
}

export default LoadingSpinner
