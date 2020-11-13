'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Ticket', [{
        id: 1,
        title: 'Bug with models relations',
        description: 'Ticket model relation hasMany call some bugs',
        status: 'new',
        priority: "high",
        developerId: 2,
        submitterId: 5,
        projectId: 1
      },
      {
        id: 2,
        title: 'Voting is incomplete',
        description: 'form have not gender radio button',
        status: 'new',
        priority: "low",
        developerId: 6,
        submitterId: 3,
        projectId: 2
      },
      {
        id: 3,
        title: 'Refactor code',
        description: 'refactor some code',
        status: 'new',
        priority: "high",
        developerId: 9,
        submitterId: 5,
        projectId: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Ticket', null, {});
  }
};
