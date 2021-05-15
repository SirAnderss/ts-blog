import { Router } from 'express';
import { signIn, signUp, me } from '../controllers/auth.controller';

const router = Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.get('/me', me);

export default router;
