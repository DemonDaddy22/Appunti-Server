import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    _id: String,
    gid: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    publishedDate: {
        type: String,
        required: true,
    },
    pageCount: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    ratingsCount: {
        type: Number,
        required: true,
    },
    language: { type: String },
    imageLink: {
        type: String,
        required: true,
    },
    epub: {
        isAvailable: Boolean,
        acsTokenLink: String,
    },
    pdf: {
        isAvailable: Boolean,
        acsTokenLink: String,
    },
    authors: [String],
    categories: [String],
    industryIdentifiers: [
        {
            identifier: String,
            type: { type: String },
        },
    ],
});

const Book = mongoose.model('book', BookSchema);

export default Book;
