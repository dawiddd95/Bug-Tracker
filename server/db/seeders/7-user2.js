'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkUpdate('Users', {
      projectId: 301,
    }, {
      id: 305,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
