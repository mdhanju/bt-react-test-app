import React, { ReactNode } from 'react'
import { Container, Row, Col } from 'reactstrap'

import Menu from '../Menu'

const ContentHolder = ({ children }: Props): React.ReactElement<Props> => {
    return (
        <Container fluid className="d-flex flex-column">
            <Menu />

            <Row className="h-100 align-self-center">
                <Col className="my-auto">{children}</Col>
            </Row>
        </Container>
    )
}

type Props = {
    children?: ReactNode;
};

export default ContentHolder
