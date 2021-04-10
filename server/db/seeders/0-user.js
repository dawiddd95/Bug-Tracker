'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 300,
      name: 'Dawid',
      surname: 'Lyc',
      email: 'dawlyc1995@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'Admin',
      active: true,
      projectId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 302,
      name: 'Natalia',
      surname: 'Stąpor',
      email: 'nstopor@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'Developer',
      active: true,
      projectId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 303,
      name: 'Aleksandra',
      surname: 'Bucia',
      email: 'abucia@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'Submitter',
      active: true,
      projectId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 304,
      name: 'Patryk',
      surname: 'Kamyk',
      email: 'pkamyk@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'User',
      active: true,
      projectId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 305,
      name: 'Julia',
      surname: 'Jastrzębska',
      email: 'jjastrzebska@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'Submitter',
      active: true,
      projectId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 306,
      name: 'Rafał',
      surname: 'Lange',
      email: 'rlange@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'Developer',
      active: true,
      projectId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 307,
      name: 'Wioletta',
      surname: 'Polańska',
      email: 'wpolanska@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'ProjectLeader',
      active: true,
      projectId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 308,
      name: 'Rita',
      surname: 'Rossweise',
      email: 'rrossweise@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'ProjectLeader',
      active: true,
      projectId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 309,
      name: 'Justyna',
      surname: 'Jabłońska',
      email: 'jjablonska@gmail.com',
      password: '$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e', // ZAQ!2wsx
      type: 'Developer',
      active: true,
      projectId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
