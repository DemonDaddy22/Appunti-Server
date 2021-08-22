/* eslint-disable no-unused-vars */
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import BookSearchRoutes from './routes/Books/BookSearch';
import BookRoutes from './routes/Books/Book';
import {BOOKS_API_BASE_ENDPOINT} from './constants';

const app = express();
const port = process.env.PORT || 5000;
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/appunti';

mongoose.connect(dbUrl, {
  useNewUrlParser : true,
  useUnifiedTopology : true,
  useCreateIndex : true,
  useFindAndModify : false,
});

const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('> Database connection established'));

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// Book search routes using Google Books API
app.use(BOOKS_API_BASE_ENDPOINT, BookSearchRoutes);
// Book routes
app.use(`${BOOKS_API_BASE_ENDPOINT}/book`, BookRoutes);

app.listen(port, () => console.log(`> Serving on PORT: ${port}`));

// Error middleware
app.use((err, req, res, next) => {
  let {status = 500, message = 'Internal Server Error', name} = err;
  res.status(status).send({
    status,
    data : null,
    error : {
      name,
      message,
    },
  });
});
