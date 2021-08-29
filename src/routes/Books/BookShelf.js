import express from 'express';
import asyncErrorHandler from '../../utils/asyncErrorHandler';
import * as BookShelfController from '../../controllers/Books/BookShelf';

const router = express.Router({ mergeParams: true });

router.post('/add', asyncErrorHandler(BookShelfController.addBookShelf));

router.get('/getAll', asyncErrorHandler(BookShelfController.getAllBookShelves));

export default router;
