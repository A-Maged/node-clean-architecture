import express from 'express';

export default function authMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log('auth middleware');
  next();
}
