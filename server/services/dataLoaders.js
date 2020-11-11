import Sequelize from 'sequelize'

const Op = Sequelize.Op;

export const batchAgencies = async (keys, models) => {
   // Zbiera w kolekcje wszystkich agencji (wlascicieli traveli), których travele są pokazane 
   const agencies = await models.Agency.findAll({
     where: {
       id: {
         [Op.in]: keys
       },
     },
   })
   return keys.map(key => agencies.find(agency => agency.id === key))
}
