import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Post } from '../entity/Post';
import {
  jsonResponse,
  notFound,
  badRequest,
  unauthorized,
  serverError,
} from '../libs/jsonResponses';

export const getPosts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const posts = await getRepository(Post).find();

    return jsonResponse(res, 200, 'Success!!', posts);
  } catch (e) {
    return serverError(res, e);
  }
};

export const getPost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const post = await getRepository(Post).findOne(req.params.id);

    if (post) {
      return jsonResponse(res, 200, 'Success!!', post);
    }

    return notFound(res);
  } catch (e) {
    return serverError(res, e);
  }
};

export const setPost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const newPost = getRepository(Post).create(req.body);
    const post = await getRepository(Post).save(newPost);

    if (post) {
      return jsonResponse(res, 201, 'Success!!', post);
    }

    return badRequest(res);
  } catch (e) {
    return serverError(res, e);
  }
};

export const updatePost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const post = await getRepository(Post).findOne(req.params.id);

    if (post) {
      const newPost = getRepository(Post).merge(post, req.body);

      const updatedPost = await getRepository(Post).save(newPost);

      if (updatedPost) {
        return jsonResponse(res, 200, 'Success!!', post);
      }

      return badRequest(res);
    }

    return notFound(res);
  } catch (e) {
    return serverError(res, e);
  }
};

export const deletePost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const post = await getRepository(Post).delete(req.params.id);

    if (post) {
      return jsonResponse(res, 204, 'Success!!', null);
    }

    return notFound(res);
  } catch (e) {
    return serverError(res, e);
  }
};
