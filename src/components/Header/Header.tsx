import React from 'react'
import classnames from 'classnames'
import desktopLogoSrc from '../../assets/images/logo-white.png'
import mobileLogoSrc from '../../assets/images/bt-icon.svg'
import { FormattedMessage } from 'react-intl'
import Image from '../Image'

const Header = ({ className, id, ...props }: Props): React.ReactElement => (
    <header id={id} className={classnames(className)} {...props}>
        <div className="container-fluid">
            <div className="logo">
                <Image
                    src={desktopLogoSrc}
                    alt="brand logo"
                    className="mobile-hide"
                />
                <Image
                    src={mobileLogoSrc}
                    alt="mobile brand logo"
                    className="mobile-logo desktop-hide"
                />
                <span className="app-name">
                    <FormattedMessage id="app.name" />
                </span>
            </div>
        </div>
    </header>
)

type Props = {
    id?: string;
    className?: string;
};

Header.defaultProps = {
    id: 'btrc-Header'
}

export default Header
