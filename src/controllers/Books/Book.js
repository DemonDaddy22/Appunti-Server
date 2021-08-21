import { v4 as uuidv4 } from 'uuid';
import Book from '../../models/Book';

// TODO - update no cover image and use as default value for imageLink
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
    } = req.body.book;
    
    // check if book already exists based on gid
    const book = await Book.find({ gid });
    if (book) {
        const error = new BooksError(400, 'Bad request: Book already exists');
        return next(error);
    }

    // if doesn't exist create a new book entry
    const _id = uuidv4();
    const newBook = new Book({
        _id,
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
    });

    const response = await newBook.save();
    res.status(200).send({
        status: 200,
        error: null,
        data: { book: response },
    });
};

export const findBookByID = async (req, res, next) => {
    // find book based on _id
};

export const findBookByGID = async (req, res, next) => {
    // find book based on gid
};