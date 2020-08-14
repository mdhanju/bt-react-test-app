import React from 'react'
import {
    Card, CardText, CardBody, CardSubtitle, Button,
    Col, Row,
} from 'reactstrap'
import { connect } from 'react-redux'
import { State } from '../../store/reducers/rootReducer'
import { getFormData, getErrorData } from '../../store/actions/applicationInitActions'
import { ProfileAction } from '../../store/actions/applicationInitActions'
import { ThunkDispatch } from 'redux-thunk'
import ContentHolder from '../../components/ContentHolder'

type Props = {
  profile?: any;
  getFormData: () => void;
  getErrorData: () => void;
};


class Profile extends React.Component<Props> {
    componentDidMount(): void {
        (window as any).btPageName = "BT React Test View Profile Page"
        this.props.getFormData()
    }

    render(): React.ReactNode {
        if (!this.props.profile) {
            return <ContentHolder><h2>{'Loading your profile...'}</h2></ContentHolder>
        }

        const profile = this.props.profile

        return <ContentHolder>
            <Row>
                <Col>
                    <Card style={{ minWidth: 400 }}>
                        <CardBody>
                            <h4 className="text-center">Profile Page</h4>
                            <CardSubtitle>Sample Profile Page</CardSubtitle>
                            <CardText>ID: {profile.id}</CardText>
                            <CardText>Place: {profile.location}</CardText>
                            <CardText>Page: {profile.page}</CardText>
                            <CardText>URL: {profile.url}</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ minWidth: 400 }}>
                        <CardBody>
                            <h4 className="text-center">MOCK ACTIONS</h4>
                            <Row>
                                <Col md="12" className="mt-4">
                                    <Button block size="sm" color="danger" onClick={async () => {

                                        try {
                                            const response = await this.props.getErrorData()
                                            console.log(response)
                                            alert('AJAX ERROR')
                                        } catch (error) {
                                            console.log(error)

                                        }
                                    }}>AJAX ERROR</Button>
                                </Col>
                                <Col md="12" className="mt-4">
                                    <Button block size="sm" color="danger" onClick={() => {
                                        throw new Error("Catch me !! I am Javascript Exception")
                                    }}>JS EXCEPTION</Button>
                                </Col>
                                <Col md="12" className="mt-4">
                                    <a href="https://videovisit-qa.kp.org/healthcareanywhere/content/nat/tipsandtricks" className="btn btn-info btn-block">REDIRECT</a>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </ContentHolder >
    }
}


const mapStateToProps = (state: State): object => ({
    profile: state.appContext.profile,
    isAppInitialized: state.appContext.isAppInitialized
})

const mapDispatchToProps = (
    dispatch: ThunkDispatch<State, void, ProfileAction>
): object => ({
    getFormData: (): Promise<void> => dispatch(getFormData()),
    getErrorData: (): Promise<void> => dispatch(getErrorData())
})

const HomeWithRedux: /* eslint-disable-line @typescript-eslint/no-explicit-any */ any = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)
export default HomeWithRedux
