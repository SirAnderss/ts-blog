import { Request, Response } from 'express';
import { getRepository, ILike } from 'typeorm';
import jwt from 'jsonwebtoken';
import * as config from '../config';
import { User } from '../entity/User';

import { notFound, badRequest, unauthorized } from '../libs/jsonResponses';

export const verifyToken = async (req: Request, res: Response, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return badRequest(res);

    const decoded = jwt.verify(token, config._SECRET);

    const user = await getRepository(User).findOne({ id: (<any>decoded).id });
    if (!user) return notFound(res);

    next();
  } catch (error) {
    return unauthorized(res);
  }
};
