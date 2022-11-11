'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          profilePic:
            'https://vignette.wikia.nocookie.net/unanything/images/6/64/Bubble_Bass.jpg/revision/latest?cb=20140223074623',
          username: 'Bubble Bass',
          email: 'bbass@pickles.com',
          password: '1234'
        },
        {
          profilePic: '',
          username: '',
          email: 'bbass@pickles.com',
          password: '1234'
        },
        {},
        {},
        {}
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
