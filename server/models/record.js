import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RecordSchema = new Schema({
    record: Number,
    timestamp: String,
});

RecordSchema.set('toJSON', {
    virtuals: true,
    transform(doc, obj) {
        obj.id = obj._id;
        delete obj._id;
        delete obj.__v;
        delete obj.password;
        return obj;
    },
});

const RecordModel = mongoose.model('Record', RecordSchema);

export default RecordModel;