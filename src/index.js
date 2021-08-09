/* eslint-disable no-unused-vars */
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import BookSearchRoutes from './routes/Books/BookSearch';

const app = express();
const port = process.env.PORT || 5000;
const dbUrl = process.env.dbUrl || 'mongodb://localhost:27017/appunti';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('> Database connection established'));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/books', BookSearchRoutes);

app.listen(port, () => console.log(`> Serving on PORT: ${port}`));

app.get('/appunti', (req, res) => {
    res.send('Hello from Appunti');
});

app.use((err, req, res, next) => {
    let { status = 500, message = 'Internal Server Error', name } = err;
    res.status(status).send({
        status,
        data: null,
        error: {
            name,
            message,
        },
    });
});
