import BaseController from './base.controller';

class MetaController extends BaseController {
    index(req, res) {
        res.json({
            version: '1.0.0',
        });
    }
}

export default new MetaController();