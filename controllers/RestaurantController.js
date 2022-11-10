const { Restaurant } = require('../models')

const GetAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll()
        res.send(restaurants) 
    } catch (error) {
        throw error
    }
}

const CreateRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.create({...req.body})
        res.send(restaurant)
    } catch (error) {
        throw error
    }
}