/* eslint-disable no-unused-vars */
import cors from 'cors';
import express from 'express';

import BookSearchRoutes from './routes/Books/BookSearch';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

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
