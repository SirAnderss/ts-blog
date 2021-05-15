import { Response } from 'express';

export const jsonResponse = (
  res: Response,
  code: number,
  message: string,
  data: Array<any> | Object | null | undefined
) =>
  res.status(code).json({
    status: code,
    message: message,
    data: data,
  });

export const badRequest = (res: Response) =>
  res.status(403).json({
    status: 403,
    message: 'Bad request!!',
    data: null,
  });

export const unauthorized = (res: Response) =>
  res.status(401).json({
    status: 401,
    message: 'Unauthorized!!',
    data: null,
  });

export const notFound = (res: Response) =>
  res.status(404).json({
    status: 404,
    message: 'Not Found!!',
    data: null,
  });

export const serverError = (res: Response, error: Object) =>
  res.status(500).json({
    status: 500,
    message: 'Server error!!',
    data: error,
  });
