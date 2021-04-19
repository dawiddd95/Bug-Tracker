import express from 'express';
import Sequelize from 'sequelize';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();
const Op = Sequelize.Op;

router.delete('/api/user/tickets/:id', checkToken, async (req, res) => { 
   const id = parseInt(req.params.id, 10);

    try {
        await models.Comment.destroy({where: {ticketId: id}})

        models.Ticket.destroy({
            include: [
                {model: models.Comment, as: 'comments'},
            ],
            where: {id}
        })

        res.json({success: true, error: null})
    } catch(err) {
        res.status(400).send(err)
    }
})

export default router;