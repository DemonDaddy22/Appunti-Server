import express from 'express';

import * as BookShelfController from '../../controllers/Books/BookShelf';
import asyncErrorHandler from '../../utils/asyncErrorHandler';

const router = express.Router({mergeParams : true});

router.post('/add', asyncErrorHandler(BookShelfController.addBookShelf));

router.get('/getAll', asyncErrorHandler(BookShelfController.getAllBookShelves));

router.patch('/update', asyncErrorHandler(BookShelfController.updateBookShelf));

router.delete('/remove',
              asyncErrorHandler(BookShelfController.deleteBookShelf));

export default router;
