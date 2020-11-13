'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      id: 1,
      name: 'Dawid',
      surname: 'Lyc',
      email: 'dawlyc1995@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'Admin',
      active: true,
      projectId: null
    },
    {
      id: 2,
      name: 'Natalia',
      surname: 'Stąpor',
      email: 'nstopor@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'Developer',
      active: true,
      projectId: 1
    },
    {
      id: 3,
      name: 'Aleksandra',
      surname: 'Bucia',
      email: 'abucia@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'Submitter',
      active: true,
      projectId: 2
    },
    {
      id: 4,
      name: 'Patryk',
      surname: 'Kamyk',
      email: 'pkamyk@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'User',
      active: true,
      projectId: null
    },
    {
      id: 5,
      name: 'Julia',
      surname: 'Jastrzębska',
      email: 'jjastrzebska@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'Submitter',
      active: true,
      projectId: 1
    },
    {
      id: 6,
      name: 'Rafał',
      surname: 'Lange',
      email: 'rlange@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'Developer',
      active: true,
      projectId: 2
    },
    {
      id: 7,
      name: 'Wioletta',
      surname: 'Polańska',
      email: 'wpolanska@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'ProjectLeader',
      active: true,
      projectId: 1
    },
    {
      id: 8,
      name: 'Rita',
      surname: 'Rossweise',
      email: 'rrossweise@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'ProjectLeader',
      active: true,
      projectId: 2
    },
    {
      id: 9,
      name: 'Justyna',
      surname: 'Jabłońska',
      email: 'jjablonska@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'Developer',
      active: true,
      projectId: 1
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
