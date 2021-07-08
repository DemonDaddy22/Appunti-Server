export default class BooksError extends Error {
    constructor(...args) {
        super(args);
        const [status, message, name] = args;
        this.status = status || 500;
        this.message = message || 'Internal server error';
        this.name = name || 'BooksError';
    }
}
