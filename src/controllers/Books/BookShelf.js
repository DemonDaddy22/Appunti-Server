import { v4 as uuidv4 } from 'uuid';
import BooksError from '../../errors/BooksError';
import Book from '../../models/Book';
import BookShelf from '../../models/BookShelf';
import { isEmptyList, isEmptyObject } from '../../utils';

// creates a new bookshelf for logged in user
// TODO - set limit on number of bookshelves per user
export const addBookShelf = async (req, res, next) => {
    const {
        bookIds = [],
        title = '',
        description = '',
        coverImageLink = '',
    } = req.body;

    // check if bookshelves already exist with same title
    // eslint-disable-next-line prettier/prettier
    const bookshelves = await BookShelf.find({ title: { $regex: new RegExp(`^${title}$`), $options: 'i' } }).exec();
    if (!isEmptyList(bookshelves)) {
        const error = new BooksError(400, `${title} is already used`);
        return next(error);
    }

    const uid = uuidv4();
    const userId = uuidv4();

    const books =
        (await bookIds?.reduce(async (accu, id) => {
            const book = await Book.findById(id);
            return !isEmptyObject(book) ? [...accu, book] : accu;
        }, [])) || [];

    const bookshelf = new BookShelf({
        uid,
        userId,
        title,
        description,
        coverImageLink,
        books,
    });

    let newBookshelf = await bookshelf.save();
    res.status(200).send({
        status: 200,
        error: null,
        data: { bookshelf: newBookshelf },
    });
};

// updates bookshelf of specified id and add/delete book(s)
export const updateBookShelf = async (req, res, next) => {
    // get bookshelf id and list of book ids
};

// deletes bookshelf of specified id
export const deleteBookShelf = async (req, res, next) => {};

// get the list of all the bookshelves of logged in user
export const getAllBookShelves = async (req, res, next) => {
    const bookshelves = await BookShelf.find({}).populate('books');
    res.status(200).send({
        status: 200,
        error: null,
        data: { bookshelves },
    });
};
