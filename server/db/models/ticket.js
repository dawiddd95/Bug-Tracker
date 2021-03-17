'use strict';

module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    status: {
      allowNull: false,
      defaultValue: 'new',
      type: DataTypes.ENUM,
      values: ['new', 'ongoing', 'done', 'blocked', 'rejected'],
    },
    priority: {
      allowNull: false,
      defaultValue: 'low',
      type: DataTypes.ENUM,
      values: ['low', 'normal', 'high'],
    },
  }, {});
  Ticket.associate = function (models) {
    Ticket.hasMany(models.Comment, { as: 'comments', foreignKey: 'ticketId', onDelete: 'cascade' });
    Ticket.belongsTo(models.User, { as: 'developer', foreignKey: 'developerId' }); 
    Ticket.belongsTo(models.User, { as: 'submitter', foreignKey: 'submitterId' });
    Ticket.belongsTo(models.Project, { as: 'project', foreignKey: 'projectId'});
  };
  return Ticket;
};