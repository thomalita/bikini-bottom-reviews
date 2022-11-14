'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'reviews',
      [
        {
          restaurantId: 1,
          userId: 1,
          content: `This burger joint is absolutely DISGUSTING. I can't believe they have customers!`,
          rating: 1
        },
        {
          restaurantId: 2,
          userId: 2,
          content: `CHOCOLATE`,
          rating: 3
        },
        {
          restaurantId: 1,
          userId: 3,
          content: `The food was alright but the their screams were delicious`,
          rating: 4
        },
        {
          restaurantId: 1,
          userId: 4,
          content: `The food is cheap and the ingriedients come from the garbage just like the owner`,
          rating: 2
        },
        {
          restaurantId: 1,
          userId: 5,
          content: `This burger joint is absolutely DISGUSTING. Come down to the Chum Bucket for a better experience and better Chum.`,
          rating: 1
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {})
  }
}
