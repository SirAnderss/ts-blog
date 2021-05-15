import { Router } from 'express';
import { verifyToken } from '../middlewares';
import {
  getPosts,
  getPost,
  setPost,
  updatePost,
  deletePost,
} from '../controllers/post.controller';

const router = Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', verifyToken, setPost);
router.put('/:id', verifyToken, updatePost);
router.delete('/:id', verifyToken, deletePost);

export default router;
