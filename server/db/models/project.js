'use strict';

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {});
  Project.associate = function (models) {
    Project.hasMany(models.User, { as: 'users', foreignKey: 'projectId' });
    Project.hasMany(models.Ticket, { as: 'tickets', foreignKey: 'projectId' });  
  };
  return Project;
};