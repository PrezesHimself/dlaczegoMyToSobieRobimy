import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;

const Expense = new Schema({
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    gas: {
        type: Number,
        required: true,
    },
    electricity: {
        type: Number,
        required: true,
    },
    water: {
        type: Number,
        required: true,
    }
});

Expense.set('toJSON', {
    virtuals: true,
    transform(doc, obj) {
        obj.id = obj._id;
        delete obj._id;
        delete obj.__v;
        delete obj.password;
        return obj;
    },
});

const ExpenseModel = mongoose.model('Expense', Expense);

export default ExpenseModel;