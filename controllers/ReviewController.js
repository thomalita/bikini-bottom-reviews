const { Review } = require('../models')

const GetAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll()
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const getReviewByRestaurant = async (req, res) => {
  try {
    const reviews = await Review.findAll({where: {restaurantId: req.params.restaurant_id}})
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const CreateReview = async (req, res) => {
  try {
    const review = await Review.create({
      ...req.body
    })
    res.send(review)
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    const reviewId = parseInt(req.params.review_id)
    const updatedReview = await Review.update(req.body, {
      where: { id: reviewId },
      returning: true
    })
    res.send(updatedReview)
  } catch (error) {
    throw error
  }
}

const DeleteReview = async (req, res) => {
  try {
    const reviewId = parseInt(req.params.review_id)
    await Review.destroy({ where: { id: reviewId } })
    res.send({ message: `Deleted review with an id of ${reviewId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllReviews,
  CreateReview,
  UpdateReview,
  DeleteReview,
  getReviewByRestaurant
}
