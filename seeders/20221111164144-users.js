const middleware = require('../middleware')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let passwordDigest = await middleware.hashPassword('1234')
    await queryInterface.bulkInsert(
      'users',
      [
        {
          profilePic:
            'https://ih1.redbubble.net/image.292673814.6926/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
          username: 'Bubble Bass',
          email: 'bbass@pickles.com',
          passwordDigest,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          profilePic: 'https://i.ytimg.com/vi/ghvNSzGTQOg/maxresdefault.jpg',
          username: 'Tom',
          email: 'tomm@chocolate.com',
          passwordDigest,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          profilePic:
            'https://ih0.redbubble.net/image.365479721.3624/flat,800x800,075,f.jpg',
          username: 'Hash Slinging Slasher',
          email: 'hash@slasher.com',
          passwordDigest,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          profilePic: 'https://wallpapercave.com/wp/Ggoin8Y.jpg',
          username: 'Squidward',
          email: 'squid@tentacles.com',
          passwordDigest,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          profilePic:
            'http://clipartmag.com/images/spongebob-plankton-cliparts-35.jpg',
          username: 'Plankton',
          email: 'plankton@chumbucket.com',
          passwordDigest,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
