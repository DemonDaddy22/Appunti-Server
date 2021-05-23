import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`> Serving on PORT: ${port}`));

app.get('/appunti', (req, res) => {
    res.send('Hello from Appunti');
});
