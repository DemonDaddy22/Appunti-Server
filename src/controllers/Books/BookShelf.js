import { v4 as uuidv4 } from 'uuid';
import BooksError from '../../errors/BooksError';
import BookShelf from '../../models/BookShelf';
import { isEmptyList } from '../../utils';

// creates a new bookshelf for logged in user
// TODO - set limit on number of bookshelves per user
export const addBookShelf = async (req, res, next) => {
    const {
        bookIds = [],
        title = '',
        description = '',
        coverImageLink = '',
    } = req.body;

    // check if a bookshelf already exists with same title
    const bookshelves = await BookShelf.find({ title }).exec();
    console.log(bookIds);
    if (!isEmptyList(bookshelves)) {
        const error = new BooksError(400, `${title} is already used`);
        return next(error);
    }

    const _id = uuidv4();
    const userId = uuidv4();

    // TODO - loop over bookIds (gids) and check if they exist in Book table, fetch them, else create a new entry

    const bookshelf = new BookShelf({
        _id,
        userId,
        title,
        description,
        coverImageLink,
    });

    const response = await bookshelf.save();
    res.status(200).send({
        status: 200,
        error: null,
        data: { bookshelf: response },
    });
};

// updates bookshelf of specified id and add/delete book(s)
export const updateBookShelf = async (req, res, next) => {};

// deletes bookshelf of specified id
export const deleteBookShelf = async (req, res, next) => {};

// get the list of all the bookshelves of logged in user
export const getAllBookShelves = async (req, res, next) => {};
