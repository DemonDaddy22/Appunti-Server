import express from 'express';

import * as BookController from '../../controllers/Books/Book';
import asyncErrorHandler from '../../utils/asyncErrorHandler';

const router = express.Router({mergeParams : true});

router.post('/add', asyncErrorHandler(BookController.addBook));

router.get('/find', asyncErrorHandler(BookController.findBookByID));

router.get('/find/gid', asyncErrorHandler(BookController.findBookByGID));

export default router;
