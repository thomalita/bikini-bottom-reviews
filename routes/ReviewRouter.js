const Router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

Router.get('/', controller.GetAllReviews)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReview
)
Router.delete(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReview
)
Router.put(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateReview
)

module.exports = Router
