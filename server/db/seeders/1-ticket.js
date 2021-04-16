'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Tickets', [{
        id: 301,
        title: 'Bug with models relations',
        description: 'Ticket model relation hasMany call some bugs',
        priority: "high",
        developerId: 302,
        submitterId: 305,
        projectId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 302,
        title: 'Voting is incomplete',
        description: 'form have not gender radio button',
        priority: "low",
        developerId: 306,
        submitterId: 303,
        projectId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 303,
        title: 'Refactor code',
        description: 'refactor some code',
        priority: "high",
        developerId: 309,
        submitterId: 305,
        projectId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Tickets', null, {});
  }
};
