'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'restaurants',
      [
        {
          name: 'Krusty Krab',
          address: '124 conch st',
          image: 'https://wallpapercave.com/wp/wp4553572.png',
          menu: 'Krusty Krab Specials',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Chum Bucket',
          address: '134 conch st',
          image:
            'https://blogs.ubc.ca/rabiaalaqillahshazali/files/2013/11/Yes_finnaly_the_chum_bucket_is_mine1.jpg',
          menu: 'Chum Bucket Specials',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('restaurants', null, {})
  }
}
