import { Router } from 'express';

import MetaController from './controllers/meta.controller';
import RecordsController from './controllers/records.controller';

const routes = new Router();

routes.get('/', MetaController.index);

routes.get('/records', RecordsController.search);
routes.post('/records', RecordsController.create);

export default routes;