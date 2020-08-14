import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './applicationInitActions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('loadingActions', () => {
    let store

    beforeEach(() => {
        store = mockStore({
            data: {
                config: { test: true }
            }
        })
    })

    describe('LoadApp', () => {
        it('should return the APP_INIT action', async () => {
            window.BT_CONFIG = { config: { test: true } }

            const expectedActions = [
                {
                    type: actions.APP_INIT_LOAD,
                    payload: { config: { test: true } }
                }
            ]
            await store.dispatch(actions.initializeApp())
            expect(store.getActions()).toEqual(expectedActions)
        })

        it('should return the APP_INIT_ERROR action', async () => {
            delete window.BT_CONFIG

            const expectedActions = [
                { type: actions.APP_INIT_ERROR, payload: { config: {} } }
            ]
            await store.dispatch(actions.initializeApp())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
