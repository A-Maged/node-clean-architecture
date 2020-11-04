import { Router } from 'express';

import { customMiddlewares } from '../middlewares';
import { index, create } from '../controllers/DeviceController';

export const router = Router();

router
  .route('/devices')

  .all(customMiddlewares.auth)
  .get(index)
  .post(create);
