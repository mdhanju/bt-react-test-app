import ApiConfigMiddleware from './apiConfigMiddleware'
import AxiosUtils from './../../services/axiosUtils' //this is your middleware
const next = jest.fn() // middleware needs those as parameters, usually calling next(action) at the end to proceed
const store = jest.fn() //this is your middleware
describe('LoadApp', () => {
    it('should return the APP_INIT action', async () => {
        const initAxios = jest.fn()
        AxiosUtils.initAxiosConfig = initAxios
        store.dispatch = jest.fn()
        const action = {
            type: 'APP_INIT_LOAD',
            payload: { config: { services: { btApiGateway: {} } } }
        }
        ApiConfigMiddleware(store)(next)(action)
        expect(initAxios).toHaveBeenCalledTimes(1)
    })

    it('should return the APP_ERROR action', async () => {
        const initAxios = jest.fn()
        AxiosUtils.initAxiosConfig = initAxios
        store.dispatch = jest.fn()
        const action = { type: 'APP_INIT_ERROR', payload: { config: {} } }
        ApiConfigMiddleware(store)(next)(action)
        expect(initAxios).toHaveBeenCalledTimes(0)
    })
})
