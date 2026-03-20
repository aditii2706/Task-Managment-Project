import { Router } from 'express';
import { create, getAll } from '../controllers/task.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { validate } from '../middleware/validate.middleware';
import {
  createTaskSchema,
  updateTaskSchema,
} from '../validators/task.validator';

const router = Router();

router.post('/', authMiddleware, validate(createTaskSchema), create);
router.get('/', authMiddleware, getAll);

export default router;