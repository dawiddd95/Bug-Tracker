'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Project', [{
        id: 1,
        name: 'Bug Tracker',
        description: 'Application for manage projects',
        leaderId: 7
      },
      {
         id: 2,
         name: 'Fresh Votes',
         description: 'Application for voting',
         leaderId: 8
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Project', null, {});
  }
};
