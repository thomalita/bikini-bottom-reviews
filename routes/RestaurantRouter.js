const Router = require('express').Router()
const controller = require('../controllers/RestaurantController')

Router.get('/', controller.GetAllRestaurants)
Router.post('/', controller.CreateRestaurant)
Router.put('/:restaurant_id', controller.UpdateRestaurant)
Router.delete('/:restaurant_id', controller.DeleteRestaurant)



module.exports = Router
