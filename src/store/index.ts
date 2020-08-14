import { createStore, applyMiddleware, Store } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import APIConfigMiddleware from './middlewares/apiConfigMiddleware'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { ApplicationInitAction } from './actions/applicationInitActions'

const configureStore = (
    preloadedState = {}
): Store<object, ApplicationInitAction> =>
    createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk, APIConfigMiddleware))
    )

export default configureStore
