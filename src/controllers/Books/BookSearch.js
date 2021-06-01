import dotenv from 'dotenv';
import axios from 'axios';
import { BOOKS_API_URI } from '../../constants';

dotenv.config();

export const bookSearch = async (req, res) => {
    const { q } = req.query;
    const data = axios.get(`${BOOKS_API_URI}?key=${process.env.BOOKS_API_KEY}&q=${q}&maxResults=10`);
    res.send(data);
};