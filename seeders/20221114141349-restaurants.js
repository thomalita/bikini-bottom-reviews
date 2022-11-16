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
          menu: 'https://static.wixstatic.com/media/81feaf_fd8de62ead460c9917c58936426f5f04.jpg/v1/fill/w_490,h_504,al_c,lg_1,q_80,enc_auto/81feaf_fd8de62ead460c9917c58936426f5f04.jpg',
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
