import express from 'express';
import Sequelize from 'sequelize';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();
const Op = Sequelize.Op;

router.delete('/api/users/:id', checkToken, async (req, res) => { 
   const {id} = req.params;

    try {
        await models.Comment.destroy({where: { authorId: id }})

        await models.Ticket.destroy({where: { submitterId: id }})
        await models.Ticket.update({developerId: null}, {where: {developerId: id} })

        models.User.destroy({where: {id}})

        res.json({success: true, msg: 'User delete successfully!'})
    } catch(err) {
        res.status(400).send(err)
    }
})

export default router;