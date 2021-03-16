'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkUpdate('Users', {
      projectId: 2,
    }, {
      id: 6,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
