import { Router } from 'express';
import { getPosts } from '../controllers/post.controller';

const router = Router();

router.get('/', getPosts);
// router.get('/:id', getPosts);
// router.post('/', getPosts);
// router.put('/:id', getPosts);
// router.delete('/:id', getPosts);

export default router;
