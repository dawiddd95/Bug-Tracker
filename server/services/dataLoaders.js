import Sequelize from 'sequelize'

const Op = Sequelize.Op;

export const batchTickets = async (keys, models) => {
  const tickets = await models.Ticket.findAll({
    where: {
      id: {
        [Op.in]: keys
      },
    },
  })
  return keys.map(key => tickets.find(ticket => ticket.id === key))
}

export const batchUsers = async (keys, models) => {
  const users = await models.User.findAll({
    where: {
      id: {
        [Op.in]: keys
      },
    },
  })
  return keys.map(key => users.find(user => user.id === key))
}

export const batchProjects = async (keys, models) => {
  const projects = await models.Project.findAll({
    where: {
      id: {
        [Op.in]: keys
      },
    },
  })
  return keys.map(key => projects.find(project => project.id === key))
}