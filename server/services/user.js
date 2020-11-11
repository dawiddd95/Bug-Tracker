import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import uuid from 'uuid';

import models from '../db/models';


const SECRET = uuid.v4();

const generateToken = user => {
   return jwt.sign({userId: user.id}, SECRET)
}

export const createUser = async (name, surname, email, password, repeatPassword) => {
   const active = true;
   const hashedPassword = await bcrypt.hash(password, 10);
   
   const user = await models.User.findOne({where: {email}});
   if(user) throw new Error('Email is already in usage');

   if(password !== repeatPassword) throw new Error('Password and repeat password must be the same');

   return models.User.create({ name, surname, email, password: hashedPassword, active });
}

export const loginUser = async (email, password) => {
   const user = await models.User.findOne({where: {email}});
   if(!user) throw new Error('Wrong user');

   const valid = await bcrypt.compare(password, user.password);
   if(!valid) throw new Error('Wrong password');

   if(!user.active) throw new Error('Account is deactivated');

   return { token: generateToken(user), user};
}