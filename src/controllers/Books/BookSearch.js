import dotenv from 'dotenv';
dotenv.config();

import axios from 'axios';
import {
    BOOKS_API_URI,
    DEFAULT_MAX_RESULTS,
    DEFAULT_START_INDEX,
} from '../../constants';
import isEmptyString from '../../utils/isEmptyString';
import BooksError from '../../errors/BooksError';

// TODO - add isLoggedIn auth to prevent misuse of API
export const bookSearch = async (req, res, next) => {
    const q = req?.query?.q || '';
    const maxResults = req?.query?.maxResults || DEFAULT_MAX_RESULTS;
    const startIndex = req?.query?.start || DEFAULT_START_INDEX;

    if (
        isEmptyString(q) ||
        startIndex < 0 ||
        maxResults < 1 ||
        maxResults > process.env.MAX_RESULTS_UPPER
    ) {
        const error = new BooksError(400, 'Bad request');
        return next(error);
    }
    const response = await axios.get(BOOKS_API_URI, {
        params: {
            q,
            maxResults,
            startIndex,
            key: process.env.BOOKS_API_KEY,
        },
    });
    res.status(response.status).send({
        status: 200,
        data: response.data,
        error: null,
    });
};
