import { Router } from 'express';

import { index } from '../controllers/HomeController';

export const router = Router();

router
  .route('/')

  .get(index);
