import React from 'react'
import {
    Button,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    CardTitle,
    Col,
    Row,
    DropdownItem
} from 'reactstrap'

import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { State } from '../../store/reducers/rootReducer'
import { submitForm } from '../../store/actions/applicationInitActions'
import { RegisterAction } from '../../store/actions/applicationInitActions'

import ContentHolder from '../../components/ContentHolder'

const SampleForm = (props?: any): React.ReactElement => {
    (window as any).btPageName = "BT React Test Register Page"
    return (
        <ContentHolder>
            <Card>
                <CardBody>
                    <CardTitle>
                        <h2>Register</h2>
                    </CardTitle>
                    <DropdownItem divider className="mb-3" />
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    placeholder="12345@example.com"
                                    id="email"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" id="password" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input
                            type="text"
                            placeholder="1234 Main St"
                            id="address"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address2">Address 2</Label>
                        <Input
                            type="text"
                            placeholder="Apartment, studio, or floor"
                            id="address2"
                        />
                    </FormGroup>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="city">City</Label>
                                <Input type="text" id="city" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="state">State</Label>
                                <Input type="text" id="state" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="zip">Zip</Label>
                                <Input type="text" id="zip" />
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <Button block color="primary" onClick={async () => {
                                try {
                                    await props.submitForm()
                                    props.history.push('/profile')
                                } catch (error) {
                                    console.log(error)
                                }
                            }}>
                Register
                            </Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </ContentHolder>
    )
}

const mapStateToProps = (state: State): object => ({
    register: state.appContext.register,
})

const mapDispatchToProps = (
    dispatch: ThunkDispatch<State, void, RegisterAction>
): object => ({
    submitForm: (): Promise<void> => dispatch(submitForm())
})

const HomeWithRedux: /* eslint-disable-line @typescript-eslint/no-explicit-any */ any = connect(
    mapStateToProps,
    mapDispatchToProps
)(SampleForm)
export default HomeWithRedux
