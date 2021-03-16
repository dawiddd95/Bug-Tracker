'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Projects', [{
         id: 1,
         name: 'Bug Tracker',
         description: 'Application for manage projects',
         leaderId: 7,
         createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
         id: 2,
         name: 'Fresh Votes',
         description: 'Application for voting',
         leaderId: 8,
         createdAt: new Date(),
         updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Projects', null, {});
  }
};