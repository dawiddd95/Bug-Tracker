'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      surname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        defaultValue: 'User',
        type: Sequelize.ENUM,
        values: ['Admin', 'ProjectLeader', 'Developer', 'Submitter', 'User'],
      },
      active: {
        allowNull: false,
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
      // W Modelu User mamy  User.belongsTo(models.Project, { as: 'project', foreignKey: 'projectId' }); 
      // Więc musimy zrealizować w migracji to połączenie również
      // Dla hasMany nie deklarujemy
      // Podajemy klucz obcy
      projectId: {
         type: Sequelize.INTEGER,
         // Do jakiego modelu to połączenie 
         references: {
           model: 'Project',
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User');
  }
};