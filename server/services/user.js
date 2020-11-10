import bcrypt from 'bcrypt';
import models from '../../db/models';

export const createUser = async (name, surname, email, password, repeatPassword) => {
   const active = true;
   const hashedPassword = await bcrypt.hash(password, 10);
   
   const user = await models.User.findOne({where: {email}});
   if(user) throw new Error('Email is already in usage');

   if(password !== repeatPassword) throw new Error('Password and repeat password must be the same');

   return models.User.create({ name, surname, email, password: hashedPassword, active });
}