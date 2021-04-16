'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tickets', {
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
      priority: {
        allowNull: false,
        defaultValue: 'low',
        type: Sequelize.ENUM,
        values: ['low', 'normal', 'high'],
      },
      developerId: {
         type: Sequelize.INTEGER,
         references: {
           model: 'Users',
           key: 'id'
         }
      },
      submitterId: {
         type: Sequelize.INTEGER,
         references: {
           model: 'Users',
           key: 'id'
         }
      },
      projectId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Projects',
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
    await queryInterface.dropTable('Tickets');
  }
};