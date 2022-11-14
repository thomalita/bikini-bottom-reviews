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
          menu: 'Krusty Krab Specials'
        },
        {
          name: 'Chum Bucket',
          address: '134 conch st',
          menu: 'Chum Bucket Specials'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('restaurants', null, {})
  }
}
