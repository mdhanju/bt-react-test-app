import React from 'react'
import { connect } from 'react-redux'
import { initializeApp } from '../../store/actions/applicationInitActions'
import { ThunkDispatch } from 'redux-thunk'
import AppRouter from '../../components/AppRouter'

import { State } from '../../store/reducers/rootReducer'
import { ApplicationInitAction } from '../../store/actions/applicationInitActions'

type Props = {
    isAppInitialized: string;
    initializeApp: () => void;
};

class App extends React.Component<Props> {
    componentDidMount(): void {
        this.props.initializeApp()
    }

    render(): React.ReactNode {
        return <AppRouter isAppInitialized={this.props.isAppInitialized} />
    }
}

const mapStateToProps = (state: State): object => ({
    isAppInitialized: state.appContext.isAppInitialized
})

const mapDispatchToProps = (
    dispatch: ThunkDispatch<State, void, ApplicationInitAction>
): object => ({
    initializeApp: (): Promise<void> => dispatch(initializeApp())
})

const AppWithRedux: /* eslint-disable-line @typescript-eslint/no-explicit-any */ any = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
export default AppWithRedux
