'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Comments', [{
        id: 301,
        content: 'Something goes wrong?',
        ticketId: 301,
        authorId: 309,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 302,
        content: 'Yes, could you solve this at once?',
        ticketId: 301,
        authorId: 305,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 303,
        content: 'Everything is allright now',
        ticketId: 301,
        authorId: 309,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 304,
        content: 'Emoji is not visible. Can you fix this in this week?',
        ticketId: 303,
        authorId: 305,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
