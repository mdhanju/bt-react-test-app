import React from 'react'

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
    componentDidMount(): void {
        (window as any).btPageName = "BT React Test Home Page"
        this.props.getFormData()
    }

    render(): React.ReactNode {
        if (!this.props.profile) {
            return <ContentHolder><h2>{'Loading...'}</h2></ContentHolder>
        }

        return <ContentHolder>
            <img src={backgroundImg} alt="background" />
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
