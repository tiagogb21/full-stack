/* eslint-disable import/no-unresolved */
import * as express from 'express';

const entityFactory = require('../factory/factory');

const userRouter = express.Router();

// Criando rotas para o CRUD de users:

// Create:
userRouter.post('/users', entityFactory.create);

// Read:
userRouter.get('/users', entityFactory.findAll);
userRouter.get('/users', entityFactory.findOne);

// Update:
userRouter.put('/users', entityFactory.update);

// Delete:
userRouter.put('/users', entityFactory.delete);

export default userRouter;
