import dotenv from 'dotenv';
import axios from 'axios';
import { BOOKS_API_URI } from '../../constants';

dotenv.config();

// TODO - add isLoggedIn auth to prevent misuse of API
// TODO - add edge case handling for q, maxResults and page
// TODO - create and throw custom error
export const bookSearch = async (req, res) => {
    const { q, maxResults = 10, page = 0 } = req.query;
    const response = await axios.get(BOOKS_API_URI, {
        params: {
            q,
            maxResults,
            startIndex: page,
            key: process.env.BOOKS_API_KEY,
        },
    });
    res.status(response.status).send(response.data);
};
