'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Do dodawania kolumn lub usuwania stosujemy obietnice
    return Promise.all([
      // Dodawanie kolumny
      queryInterface.addColumn(
        // Do jakiej tabeli, ale podajemy z „s” w liczbie mnogiej jak do relacji
        'Projects', 
        // Jaką kolumnę
        'leaderId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id'
          }
        },
      )
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
