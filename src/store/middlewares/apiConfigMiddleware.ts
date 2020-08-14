import { APP_INIT_LOAD } from '../actions/applicationInitActions'
import AxiosUtils from '../../services/axiosUtils'
import { Dispatch, AnyAction } from 'redux'

const APIConfigMiddleware = () => (next: Dispatch) => (
    action: AnyAction
): void => {
    if (action.type === APP_INIT_LOAD) {
        AxiosUtils.initAxiosConfig(action.payload.config)
    }

    next(action)
}

export default APIConfigMiddleware
