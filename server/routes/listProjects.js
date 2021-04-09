import express from 'express';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();

router.get('/api/user/projects', checkToken, async (req, res) => { 
   const projects  = await models.Project.findAll();

   res.json({data: projects});
})

export default router;