import AppInitReducer from './appInitReducer'
import {
    APP_INIT_LOAD,
    APP_INIT_ERROR
} from '../../actions/applicationInitActions'

describe('AppInitReducer', () => {
    it('Load Default state', () => {
        const state = AppInitReducer(undefined, 'SUCCESS')
        expect(state.isAppInitialized).toBe('INPROGRESS')
    })

    it('Load LOAD state', () => {
        const state = AppInitReducer(undefined, {
            payload: {},
            type: APP_INIT_LOAD
        })
        expect(state.isAppInitialized).toBe('SUCCESS')
    })

    it('Load Error state', () => {
        const state = AppInitReducer(undefined, {
            payload: {},
            type: APP_INIT_ERROR
        })
        expect(state.isAppInitialized).toBe('ERROR')
    })
})
