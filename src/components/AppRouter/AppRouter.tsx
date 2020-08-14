import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'
import MainSection from '../MainSection'
import ErrorPage from '../ErrorPage'
import LoadingSpinner from '../LoadingSpinner'

import Home from '../../containers/Home'
import ProfilePage from '../../containers/Profile'
import SampleForm from '../../containers/SampleForm'
import UnderConstruction from '../UnderConstruction'

type Props = {
    isAppInitialized: string;
};

const Routes = (): React.ReactElement => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/bt-test-home" component={Home} />
                <Route exact path="/addProfile" component={SampleForm} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/help" component={UnderConstruction} />
                <Route exact path="/error" component={ErrorPage} />
            </Switch>
        </Suspense>
    )
}

const AppRouter = ({ isAppInitialized }: Props): React.ReactElement => {
    return (
        <Router>
            <Header />
            <MainSection className="cp-main-section">
                {
                    ({
                        ERROR: <ErrorPage />,
                        INPROGESS: <LoadingSpinner />,
                        SUCCESS: <Routes />
                    } /* eslint-disable-line @typescript-eslint/no-explicit-any */ as any)[
                        isAppInitialized
                    ]
                }
            </MainSection>
            <Footer />
        </Router>
    )
}

export default AppRouter
