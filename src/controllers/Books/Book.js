import { v4 as uuidv4 } from 'uuid';
import BooksError from '../../errors/BooksError';
import Book from '../../models/Book';
import BookShelf from '../../models/BookShelf';
import { isEmptyObject, isEmptyString } from '../../utils';
import isValidUUIDv4 from '../../utils/validateUUID';

export const addBook = async (req, res, next) => {
    const {
        gid,
        title = '',
        subtitle = '',
        description = '',
        publishedDate = '',
        pageCount = 0,
        language = null,
        imageLink = '',
        epub = null,
        pdf = null,
        authors = [],
        categories = [],
        industryIdentifiers = [],
        userId = '', // read it from auth info in the future
        bookshelf = '',
    } = req.body.book;

    if (isEmptyString(userId) || isEmptyString(bookshelf)) {
        const error = new BooksError(
            400,
            'Bad request: Some parameters are invalid'
        );
        return next(error);
    }

    // check if book already exists based on userId and gid
    // TODO - book must be present only once per user
    const book = await Book.findOne({ userId, gid });
    if (book) {
        const error = new BooksError(400, 'Bad request: Book already exists');
        return next(error);
    }

    const foundBookshelf = await BookShelf.findOne({ uid: bookshelf });
    if (isEmptyObject(foundBookshelf)) {
        const error = new BooksError(404, 'No bookshelf found for provided ID');
        return next(error);
    }

    // if doesn't exist create a new book entry
    const uid = uuidv4();
    const newBook = new Book({
        uid,
        gid,
        title,
        subtitle,
        description,
        publishedDate,
        pageCount,
        rating: 0,
        ratingsCount: 0,
        language,
        imageLink,
        epub: {
            isAvailable: epub?.isAvailable || false,
            acsTokenLink: epub?.acsTokenLink || null,
        },
        pdf: {
            isAvailable: pdf?.isAvailable || false,
            acsTokenLink: pdf?.acsTokenLink || null,
        },
        authors,
        categories,
        industryIdentifiers,
        userId,
        bookshelf: foundBookshelf,
    });

    const response = await newBook.save();
    const populatedResponse = await response.populate('bookshelf');
    res.status(200).send({
        status: 200,
        error: null,
        data: { book: populatedResponse },
    });
};

export const findBookByID = async (req, res, next) => {
    const { id } = req.query;
    if (!isValidUUIDv4(id)) {
        const error = new BooksError(400, 'Invalid ID');
        return next(error);
    }

    const book = await Book.findOne({ uid: id }).populate('bookshelf');

    // if book is not available, return error
    if (!book) {
        const error = new BooksError(404, 'Book not found');
        return next(error);
    }

    // return the found book
    res.status(200).send({
        status: 200,
        error: null,
        data: { book },
    });
};

export const findBookByGID = async (req, res, next) => {
    const { gid } = req.query;
    if (isEmptyString(gid)) {
        const error = new BooksError(400, 'Invalid ID');
        return next(error);
    }

    const book = await Book.findOne({ gid }).populate('bookshelf');

    // if book is not available, return error
    if (!book) {
        const error = new BooksError(404, 'Book not found');
        return next(error);
    }

    // return the found book
    res.status(200).send({
        status: 200,
        error: null,
        data: { book },
    });
};

export const findBookForUser = async (req, res, next) => {
    const { userId, uid } = req.query;
    if (isEmptyString(userId) || isEmptyString(uid)) {
        const error = new BooksError(400, 'Invalid ID');
        return next(error);
    }

    const book = await Book.findOne({ userId, uid }).populate('bookshelf');

    // if book is not available, return error
    if (!book) {
        const error = new BooksError(404, 'Book not found');
        return next(error);
    }

    // return the found book
    res.status(200).send({
        status: 200,
        error: null,
        data: { book },
    });
};
