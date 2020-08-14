import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import './index.scss'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import configureStore from './store'
import translations from './translations'
const store = configureStore()
const language = navigator.language.split(/[-_]/)[0]

const Root = ({
    store
}: /* eslint-disable-line @typescript-eslint/no-explicit-any */ any): React.ReactElement => (
    <IntlProvider
        locale={language}
        messages={
            (translations as /* eslint-disable-line @typescript-eslint/no-explicit-any */ any)[
                language
            ]
        }
    >
        <Provider store={store}>
            <App />
        </Provider>
    </IntlProvider>
)

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('bt-web-appname')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
