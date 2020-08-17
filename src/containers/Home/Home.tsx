import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, Alert } from 'reactstrap';
import ContentHolder from '../../components/ContentHolder'
import backgroundImg from '../../assets/images/home-bg.png'
import { connect } from 'react-redux'
import { State } from '../../store/reducers/rootReducer'
import { getFormData } from '../../store/actions/applicationInitActions'
import { ProfileAction } from '../../store/actions/applicationInitActions'
import { ThunkDispatch } from 'redux-thunk'

type Props = {
  profile?: any;
  isAppInitialized: string;
  getFormData: () => void;
};

class Home extends React.Component<Props> {

  state = {
    loading: false,
    isModal: false
  }

  componentDidMount(): void {
    (window as any).btPageName = "BT React Test Home Page"
    this.props.getFormData()
  }

  onClose = () => {
    this.setState({ isModal: false })
  }

  render(): React.ReactNode {
    const profile = this.props.profile;
    if (!profile) {
      return <ContentHolder><h2>{'Loading...'}</h2></ContentHolder>
    }
    const isModal = this.state.isModal;
    const loading = this.state.loading;

    return <ContentHolder>
      {isModal &&
        <Modal isOpen={isModal} size={'lg'}>
          <ModalHeader>{'PROFILE'}</ModalHeader>
          <ModalBody>
            <div className="text-center">
              <h3>
                LOCATION: {profile.location}
              </h3>
              <h3>
                PAGE: {profile.page}
              </h3>
              <h3>
                ID: {profile.id}
              </h3>
            </div>
            <Alert>Profile is loaded sucessfully.</Alert>
            <div className="text-center">
              <Button color="primary" onClick={this.onClose}>{'CLOSE MODAL'}</Button>
            </div>
          </ModalBody>
        </Modal>
      }
      <img src={backgroundImg} alt="background" />
      <div className="mt-4">
        <Button disabled={loading} size="sm" block={true} color="primary" onClick={async () => {
          this.setState({ loading: true })
          await this.props.getFormData();
          this.setState({ loading: false, isModal: true })

        }}>{loading ? ' Loading...' : 'LOAD PROFILE IN MODAL'}</Button>
      </div>
    </ContentHolder>
  }
}


const mapStateToProps = (state: State): object => ({
  profile: state.appContext.profile,
  isAppInitialized: state.appContext.isAppInitialized
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, void, ProfileAction>
): object => ({
  getFormData: (): Promise<void> => dispatch(getFormData())
})

const HomeWithRedux: /* eslint-disable-line @typescript-eslint/no-explicit-any */ any = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
export default HomeWithRedux
