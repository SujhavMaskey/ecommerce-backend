/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import {
  addUsers,
  deleteUsers,
  getUsers,
  updateUsers,
} from '../controllers/user.controller';
import { createPostDto } from '../validators/user.validators';
import { validate } from '../utils/validate';
const router = Router();

router.get('/', getUsers);

router.post('/', validate(createPostDto), addUsers);

router.delete('/:id', deleteUsers);
router.patch('/:id', updateUsers);

// router.post('/signup',)

export default router;
