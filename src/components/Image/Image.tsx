import React from 'react'
import classnames from 'classnames'

const Image = ({
    className,
    src,
    alt,
    ...props
}: Props): React.ReactElement => (
    <img src={src} className={classnames(className)} alt={alt} {...props} />
)

type Props = {
    className?: string;
    src: string;
    alt?: string;
};

export default Image
