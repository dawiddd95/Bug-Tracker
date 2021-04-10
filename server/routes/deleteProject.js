import express from 'express';
import Sequelize from 'sequelize';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();
const Op = Sequelize.Op;

router.delete('/api/user/projects', checkToken, async (req, res) => { 
   const {id} = req.body;

   try {
      models.Project.destroy({where: {
         id: {
            [Op.in]: id
         }
      }})

      models.Ticket.destroy({where: {
         projectId: {
            [Op.in]: id
         }
      }})

      res.json({success: true, error: null})
   } catch(err) {
      res.status(400).send(err)
   }
})

export default router;