/* Book-Detail model*/
var mongoose = require('mongoose');

var book = mongoose.Schema({
    book_id: String,
    book_name: String,
    publish_date: String,
    author_name: String,
    number_of_pages: Number,
    author_id: String

});

var Book = mongoose.model('Book', book);

module.exports = {
    Book: Book
};