import AxiosUtils from './axiosUtils'

describe('BT API GatewayUtils', () => {
    it('Load Axios instance', () => {
        AxiosUtils.initAxiosConfig({
            services: {
                btApiGateway: {
                    clientId: '1234567',
                    timeout: 4000,
                    url: 'http://localhost:4001'
                }
            }
        })
        const url = AxiosUtils.buildUrl('/test')
        expect(url).toBe('http://localhost:4001/test')
    })

    it('Load Axios instance with default timeout', () => {
        AxiosUtils.initAxiosConfig({
            services: {
                btApiGateway: {
                    clientId: '1234567',
                    url: 'http://localhost:4001'
                }
            }
        })
        const url = AxiosUtils.buildUrl('/test2')
        expect(url).toBe('http://localhost:4001/test2')
    })
})
