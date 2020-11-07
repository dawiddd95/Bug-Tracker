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
    }
  }, { "freezeTableName": true, "timestamps": false });
  Ticket.associate = function (models) {
    Ticket.belongsTo(models.User, { as: 'developer', foreignKey: 'developerId' }); 
    Ticket.belongsTo(models.User, { as: 'submitter', foreignKey: 'submitterId' });
    Ticket.hasMany(models.Comment, { as: 'comments', foreignKey: 'ticketId' });
  };
  return Ticket;
};