import express from 'express';
import jwt_decode from "jwt-decode"

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();

router.post('/api/user/tickets', checkToken, async (req, res) => { 
    const {token} = req.cookies;
    const {title, desc, status, priority, projectId} = req.body;
   
    var decoded = jwt_decode(token);

    try {
        const ticket = await models.Ticket.create({ title, description: desc, status, priority, projectId, submitterId: decoded.id, developerId: decoded.id })

        res.json({ticket})
    } catch(err) {
        console.log(err)
        res.status(400).send(err)
    }
})

export default router;