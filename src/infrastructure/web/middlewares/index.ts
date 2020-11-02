import config from '@Config';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { RequestHandler } from 'express';

import authMiddleware from './authMiddleware';
import loggerMiddleware from './loggerMiddleware';

export const globalMiddlewares = [
  bodyParser.json(),
  cookieParser(config.cookiesSecret),
  loggerMiddleware,
];

export const customMiddlewares: { [key: string]: RequestHandler } = {
  auth: authMiddleware,
};
