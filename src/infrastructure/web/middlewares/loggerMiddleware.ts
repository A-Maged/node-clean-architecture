import express from 'express';

export default function loggerMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log('logger middleware');
  next();
}
