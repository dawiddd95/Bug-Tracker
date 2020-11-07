'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
    surname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    type: {
      allowNull: false,
      defaultValue: 'User',
      type: DataTypes.ENUM,
      values: ['Admin', 'ProjectLeader', 'Developer', 'Submitter', 'User'],
    },
    active: {
      allowNull: false,
      defaultValue: true,
      type: DataTypes.BOOLEAN
    }
  }, { "freezeTableName": true, "timestamps": false });
  User.associate = function (models) {
    User.hasMany(models.Comment, { as: 'comments', foreignKey: 'authorId' });
    User.hasMany(models.Ticket, { as: 'tasks', foreignKey: 'developerId' });
    User.hasMany(models.Ticket, { as: 'tickets', foreignKey: 'submitterId' });
  };
  return User;
};