import { combineReducers } from 'redux'

import appContext from './applicationContext/appInitReducer'

export type State = {
  profile?: any;
  register?: any;
  appContext: {
    profile?: any;
    register?: any;
    isAppInitialized: string;
    appConfig: object;
  };
};

const rootReducer = combineReducers({
    appContext
})

export default rootReducer
