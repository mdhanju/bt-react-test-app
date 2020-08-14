import mockAxios from 'axios'
import ApplicationContextApi from './applicationContextApi'

it('fetches data from unsplash', async () => {
    const mockData = {
        config: {
            services: {
                btApiGateway: {
                    clientId: '123456',
                    timeout: 3000,
                    url: 'http://localhost:4000'
                }
            }
        }
    }
    // setup
    mockAxios
        .create()
        .get.mockImplementationOnce(() =>
            Promise.resolve({ data: { results: mockData } })
        )
    // work
    const data = await ApplicationContextApi.getApplicationContext()
    // expect
    expect(data).toEqual({ data: { results: mockData } })
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith('/application/context')
})
