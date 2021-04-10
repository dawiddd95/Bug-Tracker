'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Tickets', [{
        id: 301,
        title: 'Bug with models relations',
        description: 'Ticket model relation hasMany call some bugs',
        status: 'new',
        priority: "high",
        developerId: 2,
        submitterId: 5,
        projectId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 302,
        title: 'Voting is incomplete',
        description: 'form have not gender radio button',
        status: 'new',
        priority: "low",
        developerId: 6,
        submitterId: 3,
        projectId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 303,
        title: 'Refactor code',
        description: 'refactor some code',
        status: 'new',
        priority: "high",
        developerId: 9,
        submitterId: 5,
        projectId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Tickets', null, {});
  }
};
