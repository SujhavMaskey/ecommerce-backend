import useRouter from './user.routes';
import { Router } from 'express';

const router = Router();

router.use('/users', useRouter);

export default router;
