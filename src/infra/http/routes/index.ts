import { Router } from 'express';
import { usersRoute } from './users.routes';
import { sessionsRoute } from './sessions.routes';
import { userByNameRoute } from './getUserByName.routes';

const routes = Router();

routes.use('/users', usersRoute);
routes.use('/userByName', userByNameRoute);
routes.use('/sessions', sessionsRoute);

export default routes;