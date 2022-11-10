const Router = require('express').Router()
const RestaurantRouter = require('./RestaurantRouter')
const ReviewRouter = require('./ReviewRouter')
const UserRouter = require('./UserRouter')

Router.use('/restaurant', RestaurantRouter)
Router.use('/review', ReviewRouter)
Router.use('/user', UserRouter)

module.exports = Router