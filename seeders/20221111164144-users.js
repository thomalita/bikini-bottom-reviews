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
          profilePic: 'https://i.ytimg.com/vi/ghvNSzGTQOg/maxresdefault.jpg',
          username: 'Tom',
          email: 'tomm@chocolate.com',
          password: '1234'
        },
        {
          profilePic:
            'https://ih0.redbubble.net/image.365479721.3624/flat,800x800,075,f.jpg',
          username: 'Hash Slinging Slasher',
          email: 'hash@slasher.com',
          password: '1234'
        },
        {
          profilePic: 'https://wallpapercave.com/wp/Ggoin8Y.jpg',
          username: 'Squidward',
          email: 'squid@tentacles.com',
          password: '1234'
        },
        {
          profilePic:
            'http://clipartmag.com/images/spongebob-plankton-cliparts-35.jpg',
          username: 'Plankton',
          email: 'plankton@chumbucket.com',
          password: '1234'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
