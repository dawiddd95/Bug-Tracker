import express from 'express';
import {validationResult} from 'express-validator';
import jwtDecode from 'jwt-decode';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();

router.post('/api/user/projects', checkToken, async (req, res) => { 
   const {name, desc} = req.body;

   try {
      const project = await models.Project.create({ name, description: desc })

      res.json({project})
   } catch(err) {
      res.status(400).send(err)
   }
})

export default router;