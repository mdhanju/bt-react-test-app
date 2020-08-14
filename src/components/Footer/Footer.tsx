import React from 'react'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'

const Footer = ({ className, id, ...props }: Props): React.ReactElement => (
    <footer
        id={id}
        className={classnames(className, 'container-fluid')}
        {...props}
    >
        &copy; {new Date().getFullYear()}&nbsp;
        <FormattedMessage
            id="app.footername"
            description="Footer name showing Blue Triangle name"
        />
    </footer>
)

type Props = {
    id?: string;
    className?: string;
};

Footer.defaultProps = {
    id: 'btrc-Footer'
}

export default Footer
