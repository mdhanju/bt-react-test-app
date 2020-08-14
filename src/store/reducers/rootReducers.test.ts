import { createStore } from 'redux'

import rootReducer from './rootReducer'

describe('Root Reducer', () => {
    test('combine reducers smoke test', () => {
        const store = createStore(rootReducer)
        expect(store.getState().appContext).toHaveProperty('appConfig')
    })
})
