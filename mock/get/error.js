module.exports = {
    path: '/error',
    delay: 1000,

    template: {
        "message": "Ajay error from server"
    },
    status: (req, res, next) => {
        res.status(503)
        next()
    }
}
