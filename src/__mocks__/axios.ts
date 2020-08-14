const _mockGet = jest.fn(() => Promise.resolve({ data: {} }))
export default {
    get: _mockGet,
    create: (): object => {
        return { get: _mockGet, defaults: { headers: {} } }
    },
    defaults: { headers: {} }
}
