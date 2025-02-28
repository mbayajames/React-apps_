const studentAuthController = require('../Controllers/studentauthcontroller')
const express = require('express')


const studentAuthRoute = express.Router()

studentAuthRoute.post('/studentauthadd', studentAuthController.register)

module.exports = studentAuthRoute