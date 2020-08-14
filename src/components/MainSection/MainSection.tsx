import React, { ReactNode } from 'react'
import classnames from 'classnames'

const MainSection = ({
    className,
    children,
    ...props
}: Props): React.ReactElement => (
    <section className={classnames(className)} {...props}>
        {children}
    </section>
)

type Props = {
    className?: string;
    children?: ReactNode;
};

export default MainSection
