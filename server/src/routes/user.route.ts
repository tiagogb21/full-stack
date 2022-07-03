/* eslint-disable import/no-unresolved */
import { Router } from 'express';

import userController from '../controllers/user.controller';

const userRouter = Router();

// Criando rotas para o CRUD de users:

// Create:
userRouter.post('/users', (req, res, next) => {
  userController.createUser(req.body.name)
    .then((id) => res.location(
      `${req.baseUrl}/${String(id)}`,
    ).status(201).send())
    .finally(next);
});

// Read:
userRouter.get('/users', userController.findAll);
userRouter.get('/users', userController.findOne);

// Update:
userRouter.put('/users', userController.update);

// Delete:
userRouter.put('/users', userController.delete);

export default userRouter;
