import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Posts } from '../entity/Post';

export const getPosts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const posts = await getRepository(Posts).find();

  return res.json({
    status: 200,
    message: 'Success!!',
    data: posts,
  });
};
