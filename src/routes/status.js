import { Router } from 'express';

const createUsersRoute = ({ statusController }) => {
  const router = Router();
  router.get('', statusController.isUp);
  return router;
};

export default createUsersRoute;
