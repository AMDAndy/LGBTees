'use strict';
const bcrypt = require('bcryptjs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define schema in object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Demo',
        lastName: 'User',
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Bob',
        lastName: 'Ross',
        email: 'bob@gmail.com',
        username: 'BobRoss',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Fake',
        lastName: 'User1',
        email: 'fake1@user.io',
        username: 'fakeuser1',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Fake',
        lastName: 'User2',
        email: 'fake2@user.io',
        username: 'fakeuser2',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const Op = Sequelize.Op;
    options.tableName = 'Users';
    await queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'BobRoss', 'fakeuser1', 'fakeuser2'] }
    }, {});
  }
};
