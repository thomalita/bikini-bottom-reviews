const Router = require('express').Router()
const controller = require('../controllers/RestaurantController')

Router.get('/', controller.GetAllRestaurants)

module.exports = Router