/* eslint-disable import/no-unresolved */
import * as express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router();

// Criando CRUD

// Create:
router.post('/users', UserController.findAll());

// Read:
router.get('', async () => {});

// Update:
router.put('', async () => {});

// Delete:
router.delete('', async () => {});
