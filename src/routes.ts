import express from 'express';

import UserController from './controllers/UserController';

const router = express.Router();

router
  .route('/v1/users')
  .get(UserController.get)
  .post(UserController.store);

router
  .route('/v1/users/:id')
  .get(UserController.details)
  .put(UserController.update)
  .delete(UserController.destroy);

export default router;
