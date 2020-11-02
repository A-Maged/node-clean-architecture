import config from '@Config';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { RequestHandler } from 'express';

import authMiddleware from './authMiddleware';
import loggerMiddleware from './loggerMiddleware';

export const globalMiddlewares = {
  bodyParser: bodyParser.json(),
  cookieParser: cookieParser(config.cookiesSecret),
  logger: loggerMiddleware,
};

export const customMiddlewares: { [key: string]: RequestHandler } = {
  auth: authMiddleware,
};
