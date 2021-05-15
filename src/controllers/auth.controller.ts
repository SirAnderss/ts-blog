import { Request, Response } from 'express';
import { getRepository, ILike } from 'typeorm';
import { User } from '../entity/User';
import jwt from 'jsonwebtoken';
import * as config from '../config';

import {
  jsonResponse,
  notFound,
  badRequest,
  unauthorized,
  serverError,
} from '../libs/jsonResponses';
import { Role } from '../entity/Role';

const token = (data: any): string =>
  jwt.sign(data, config._SECRET, {
    expiresIn: 86400, // 24 hours
  });

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { fullName, email, password, avatar, roles } = req.body;

    const storedUser = await getRepository(User).findOne({
      email,
      password,
    });

    if (storedUser?.id) {
      const newToken = token({
        id: storedUser.id,
        fullName: storedUser.fullName,
        email: storedUser.email,
        avatar: storedUser.avatar,
      });

      return jsonResponse(res, 200, 'Success!!', { token: newToken });
    }

    const newUser = getRepository(User).create({
      fullName,
      email,
      password,
      avatar,
    });

    if (roles.length > 0) {
      newUser.roles = roles;
    } else {
      const basicRoles = await getRepository(Role).find({
        name: ILike('%comment%'),
      });
      newUser.roles = basicRoles;
    }

    const user = await getRepository(User).save(newUser);

    const newToken = token({
      id: user?.id,
      fullName: user?.fullName,
      email: user?.email,
      avatar: user?.avatar,
    });

    return jsonResponse(res, 201, 'Success!!', { token: newToken });
  } catch (e) {
    return serverError(res, e);
  }
};

export const signIn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const storedUser = await getRepository(User).findOne({
      email,
      password,
    });

    if (storedUser?.id) {
      const newToken = token({ id: storedUser.id });

      return jsonResponse(res, 200, 'Success!!', { token: newToken });
    }

    return unauthorized(res);
  } catch (e) {
    return serverError(res, e);
  }
};

export const me = async (req: Request, res: Response): Promise<Response> => {
  const user = await getRepository(User).findOne({
    email: 'contact@siranderss.com',
    password: '123456',
  });
  return jsonResponse(res, 200, 'Success!!', user);
};
