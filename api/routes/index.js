const router = require('express').Router()

router.use('/auth', require('./auth.route'))
router.use('/users', require('./users.route'))

module.exports = router