const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/users', controller.GetAllUsers)
Router.post('/users', controller.CreateUser)
Router.put('/users/:user_id', controller.UpdateUser)
Router.delete('/users/:user_id', controller.DeleteUser)

module.exports = Router