import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookShelfSchema = new Schema(
    {
        uid: String,
        userId: {
            type: String,
            required: true,
        },
        books: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Book',
            },
        ],
        title: {
            type: String,
            required: true,
        },
        description: { type: String },
        coverImageLink: { type: String },
    },
    { timestamps: true }
);

const BookShelf = mongoose.model('Bookshelf', BookShelfSchema);

export default BookShelf;
