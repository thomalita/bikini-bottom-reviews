const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

Router.get('/', controller.GetAllReviews)

module.exports = Router