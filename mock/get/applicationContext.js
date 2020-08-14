module.exports = {
    path: '/application/context',
    render: (req, res) => {
        const script = `
        var BT_CONFIG = {
            "config": {
                "services": {
                    "btApiGateway": {
                        "clientId": "123456",
                        "timeout": 3000,
                        "url": "http://localhost:4000"
                    }
                }
            }
        }`

        res.type('.js')
        res.send(script)
    }
}
