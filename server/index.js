import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

dotenv.config();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
    .catch(err => console.error(err));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 1337));

app.get('/', function(req, res) {
    res.send('good to go');
});

app.use('/api/', routes);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

export default app;