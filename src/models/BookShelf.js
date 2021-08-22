import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookShelfSchema = new Schema({
    _id: String,
    userId: {
        type: String,
        required: true,
    },
    books: {
        type: [String],
        maxLength: 30,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: { type: String },
    coverImageLink: { type: String },
});

const BookShelf = mongoose.model('bookshelf', BookShelfSchema);

export default BookShelf;
