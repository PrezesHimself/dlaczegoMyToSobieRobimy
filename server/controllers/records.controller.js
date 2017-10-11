import BaseController from './base.controller';
import Record from '../models/record';

class RecordsController extends BaseController {

    whitelist = [
        'timestamp',
        'record'
    ];

    search = async (req, res, next) => {
        try {
            res.json(await Record.find());
        } catch(err) {
            next(err);
        }
    }

    create = async (req, res, next) => {
        console.log(req.body);
        const params = this.filterParams(req.body, this.whitelist);
        console.log(params);
        let newRecord = new Record({
            ...params,
            provider: 'local',
        });

        try {
            const savedRecord = await newRecord.save();
            res.status(201).json({ savedRecord });
        } catch(err) {
            err.status = 400;
            next(err);
        }
    }
}

export default new RecordsController();