import express from 'express';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();

router.post('/api/user/comments', checkToken, async (req, res) => { 
    const {content, ticketId, authorId} = req.body;

    try {
        await models.Comment.create({ content, ticketId, authorId })
        const author = await models.User.findOne({where: {id: authorId}})

        const {name, surname} = author

        const comment = {content, author: {name, surname}}

        res.json({comment, success: true})
    } catch(err) {
        console.log(err)
        res.status(400).send(err)
    }
})

export default router;