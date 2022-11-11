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


const UpdateRestaurant = async (req, res) => {
    try {
      const restaurant = await Restaurant.update(
        { ...req.body },
        { where: { id: req.params.restaurant_id }, returning: true }
      )
      res.send(restaurant)
    } catch (error) {
      throw error
    }
}

const DeleteRestaurant = async (req, res) => {
    try {
      await Restaurant.destroy({ where: { id: req.params.restaurant_id } })
      res.send({ msg: 'Restaurant Deleted', payload: req.params.restaurant_id, status: 'Ok' })
    } catch (error) {
      throw error
    }
  }

module.exports = {
    GetAllRestaurants,
    CreateRestaurant,
    UpdateRestaurant,
    DeleteRestaurant
}
  