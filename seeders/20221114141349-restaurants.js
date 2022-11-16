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
          menu: 'https://preview.redd.it/ovw7rbw7y6z81.jpg?auto=webp&s=bdc6e89ce2583d3155e0d5e92ba8ef71e3153b9f',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Chum Bucket',
          address: '134 conch st',
          image:
            'https://blogs.ubc.ca/rabiaalaqillahshazali/files/2013/11/Yes_finnaly_the_chum_bucket_is_mine1.jpg',
          menu: 'https://i.pinimg.com/originals/53/cd/c0/53cdc0d50d91203e41c2b0ca61f7f517.jpg',
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
