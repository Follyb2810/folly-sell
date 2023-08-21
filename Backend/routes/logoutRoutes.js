const express = require('express')
const router = express.Router()
const Logout = require('../controller/LogoutController')



router.route('/').get(Logout)

module.exports = router