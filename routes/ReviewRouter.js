const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

Router.get('/', controller.GetAllReviews)
Router.post('/', controller.CreateReview)
Router.delete('/:review_id', controller.DeleteReview)
Router.put('/:review_id', controller.UpdateReview)

module.exports = Router
