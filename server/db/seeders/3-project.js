'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Projects', [{
         id: 301,
         name: 'Bug Tracker',
         description: 'Application for manage projects',
         createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
         id: 302,
         name: 'Fresh Votes',
         description: 'Application for voting',
         createdAt: new Date(),
         updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Projects', null, {});
  }
};