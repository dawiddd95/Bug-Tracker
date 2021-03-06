'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Comments', [{
        id: 1,
        content: 'Something goes wrong?',
        ticketId: 1,
        authorId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        content: 'Yes, could you solve this at once?',
        ticketId: 1,
        authorId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        content: 'Everything is allright now',
        ticketId: 1,
        authorId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        content: 'Emoji is not visible. Can you fix this in this week?',
        ticketId: 3,
        authorId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
