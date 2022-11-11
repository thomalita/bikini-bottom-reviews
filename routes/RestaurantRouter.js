const Router = require('express').Router()
const controller = require('../controllers/RestaurantController')

Router.get('/', controller.GetAllRestaurants)
Router.post('/restaurants', controller.CreateRestaurant)
Router.put('/restaurants/:restaurant_id', controller.UpdateRestaurant)
Router.delete('/restaurants/:restaurant_id', controller.DeleteRestaurant)



module.exports = Router
