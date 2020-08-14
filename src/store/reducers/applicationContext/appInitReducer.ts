import {
    APP_INIT_LOAD,
    APP_INIT_ERROR,
    APP_PROFILE,
    APP_PROFILE_REGISTER,
    APP_ERROR
} from '../../actions/applicationInitActions'
import { ApplicationInitAction } from '../../actions/applicationInitActions'

export type State = {
  isAppInitialized?: string;
  appConfig?: object;
  profile?: object;
  register?: object;
  error?: object;
};

const defaultState = { isAppInitialized: 'INPROGRESS', appConfig: {} }

const AppInitReducer = (
    state = defaultState,
    action: ApplicationInitAction
): State => {
    switch (action.type) {
        case APP_INIT_LOAD:
            return {
                ...state,
                isAppInitialized: 'SUCCESS',
                appConfig: action.payload.config
            }
        case APP_INIT_ERROR:
            return {
                ...state,
                isAppInitialized: 'SUCCESS',
                appConfig: action.payload.config
            }
        case APP_PROFILE:
            return {
                ...state,
                profile: action.payload.profile
            }
        case APP_PROFILE_REGISTER:
            return {
                ...state,
                register: action.payload.register
            }
        case APP_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default AppInitReducer
