const { Review } = require('../models')

const GetAllReviews = async (req, res) => {
    try {
        const reviews = await Review.findAll()
        res.send(reviews)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllReviews
}