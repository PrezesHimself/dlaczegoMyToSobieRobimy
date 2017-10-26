import { Router } from 'express';

import AuthController from './controllers/auth.controller';
import MetaController from './controllers/meta.controller';
import RecordsController from './controllers/records.controller';
import UsersController from './controllers/users.controller';
import ExpensesController from './controllers/expenses.controller';

const routes = new Router();

routes.get('/', MetaController.index);

routes.post('/auth/login', AuthController.login);

// Users
routes.get('/users', UsersController.search);
routes.post('/users', UsersController.create);
routes.get('/users/me', UsersController.fetch);
routes.put('/users/me', UsersController.update);
routes.delete('/users/me', UsersController.delete);
routes.get('/users/:username', UsersController._populate, UsersController.fetch);

routes.get('/records', RecordsController.search);
routes.post('/records', RecordsController.create);

routes.get('/expenses', ExpensesController.search);
routes.post('/expenses', ExpensesController.checkIfExists, ExpensesController.create);

export default routes;