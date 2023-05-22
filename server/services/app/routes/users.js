const router = require('express').Router()
const ControllerUser = require('../controllers/users')
const os = require('os')

router.get('/', (req, res) => {
    res.status(200)
        .json({
            massage: "TES MASUK USER", os: {
                platform: os.platform(),
                arch: os.arch(),
                totalMemory: os.totalmem(),
                freeMemory: os.freemem(),
                uptime: os.uptime()
            }
        })
})
//user admin
router.post('/login', ControllerUser.login)
router.post('/register', ControllerUser.register)






module.exports = router