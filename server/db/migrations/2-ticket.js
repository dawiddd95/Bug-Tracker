'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ticket', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      status: {
        allowNull: false,
        defaultValue: 'new',
        type: Sequelize.ENUM,
        values: ['new', 'ongoing', 'done', 'blocked', 'rejected'],
      },
      developerId: {
         type: Sequelize.INTEGER,
         references: {
           model: 'User',
           key: 'id'
         }
      },
      submitterId: {
         type: Sequelize.INTEGER,
         references: {
           model: 'User',
           key: 'id'
         }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Ticket');
  }
};