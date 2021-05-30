import express from 'express';
import BookSearchRoutes from './routes/Books/BookSearch';

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/v1/books', BookSearchRoutes);

app.listen(port, () => console.log(`> Serving on PORT: ${port}`));

app.get('/appunti', (req, res) => {
    res.send('Hello from Appunti');
});
