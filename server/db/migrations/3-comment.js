'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      // Mamy w modelu Comment Comment.belongsTo(models.Ticket, { as: 'ticket', foreignKey: 'ticketId' }); więc
      ticketId: {
         type: Sequelize.INTEGER,
         // Do jakiego modelu to połączenie 
         references: {
           model: 'Ticket',
           key: 'id'
         }
      },
      // Mamy w modelu Comment Comment.belongsTo(models.User, { as: 'author', foreignKey: 'authorId' });
      authorId: {
         type: Sequelize.INTEGER,
         // Do jakiego modelu to połączenie 
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
    await queryInterface.dropTable('Comment');
  }
};