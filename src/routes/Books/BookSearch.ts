import express from 'express';
import asyncErrorHandler from '../../utils/asyncErrorHandler';
import * as BookSearchController from '../../controllers/Books/BookSearch';

const router = express.Router();

router.get('/search', asyncErrorHandler(BookSearchController.bookSearch));

export default router;