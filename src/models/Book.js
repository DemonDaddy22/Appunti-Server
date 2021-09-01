import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  uid : String,
  gid : {type : String},
  title : {type : String},
  subtitle : {type : String},
  description : {type : String},
  publishedDate : {type : String},
  pageCount : {type : Number},
  rating : {type : Number},
  ratingsCount : {type : Number},
  language : {type : String},
  imageLink : {type : String},
  epub : {
    isAvailable : Boolean,
    acsTokenLink : String,
  },
  pdf : {
    isAvailable : Boolean,
    acsTokenLink : String,
  },
  authors : [ String ],
  categories : [ String ],
  industryIdentifiers : [
    {
      identifier : String,
      type : {type : String},
    },
  ],
});

const Book = mongoose.model('Book', BookSchema);

export default Book;
