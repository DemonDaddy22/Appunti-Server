import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookshelfSchema = new Schema(
    {
        uid: String,
        userId: { type: String },
        books: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Book',
            },
        ],
        title: { type: String },
        description: { type: String },
        coverImageLink: { type: String },
    },
    { timestamps: true }
);

const Bookshelf = mongoose.model('Bookshelf', BookshelfSchema);

export default Bookshelf;
