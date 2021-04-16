'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkUpdate('Users', {
      projectId: 302,
    }, {
      id: 308,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
