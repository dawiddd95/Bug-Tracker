'use strict';

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(models.Ticket, { as: 'ticket', foreignKey: 'ticketId' });
    Comment.belongsTo(models.User, { as: 'author', foreignKey: 'authorId' });
  };
  return Comment;
};