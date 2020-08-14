import React from 'react'

import ContentHolder from '../ContentHolder'
import { FormattedMessage } from 'react-intl'

const ErrorPage = (): React.ReactElement => {
    return (
        <ContentHolder>
            <FormattedMessage
                id="err.page.system.error"
                description="system Error"
            />
        </ContentHolder>
    )
}

export default ErrorPage
