import express from 'express';
import Sequelize from 'sequelize';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();
const Op = Sequelize.Op;

router.post('/api/user/projects/search', checkToken, async (req, res) => {
   const {id, name, desc} = req.body;

   const searchResult = await models.Project.findAll({ where: {
      id: id === '' 
         ?  {
               [Op.ne]: null
            } 
         :  id,
      name: name === ''
         ?  {
               [Op.ne]: null
            }
         :  {
               [Op.iLike]: '%' + name + '%'
            },
      description: desc === ''
         ?  {
               [Op.ne]: null
            }
         :  {
               [Op.iLike]: '%' + desc + '%'
            },
   }})

   res.json({data: searchResult})
})

export default router;