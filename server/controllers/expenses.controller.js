import BaseController from './base.controller';
import Expense from '../models/expense';
import moment from 'moment';

class ExpenseController extends BaseController {

    whitelist = [
        'month',
        'year',
        'gas',
        'electricity',
        'water'
    ];

    search = async (req, res, next) => {
        try {
            res.json(await Expense.find());
        } catch(err) {
            next(err);
        }
    };

    create = async (req, res, next) => {
        const params = this.filterParams(req.body, this.whitelist);
        let newExpense = new Expense({
            ...params,
            provider: 'local',
        });

        try {
            const savedRecord = await newExpense.save();
            res.status(201).json({ savedRecord });
        } catch(err) {
            err.status = 400;
            next(err);
        }
    };

    checkIfExists = async (req, res, next) => {
        const { year, month } = req.body;

        const existing = await Expense.findOne( { year, month } );
        if(existing) {
            res.statusCode = 400;
            return res.json('record for this month already exist');
        }
        return next();
    };

    //
    // validateFileds = async (req, res, next) => {
    //
    //     req.checkBody({
    //         month: {
    //             notEmpty: true,
    //             isFloat: true
    //         },
    //         year: {
    //             notEmpty: true,
    //             isFloat: true
    //         },
    //         gas: {
    //             notEmpty: true,
    //             isNumeric: true
    //         },
    //         electricity: {
    //             notEmpty: true,
    //             isFloat: true
    //         },
    //         water: {
    //             notEmpty: true,
    //             isFloat: true
    //         }
    //     });
    //
    //     const errors = req.validationErrors();
    //
    //     if (errors) {
    //         const response = { errors: [...errors] };
    //         res.statusCode = 400;
    //         return res.json(response);
    //     }
    //
    //     return next();
    // }
}

export default new ExpenseController();