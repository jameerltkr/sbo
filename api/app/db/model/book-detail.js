/* Book-Detail model*/
var mongoose = require('mongoose');

var book = mongoose.Schema({
    book_name: String,
    edition_year: String,
    publish_date: String,
    author_name: String,
    number_of_pages: Number,
    author_id: String
});

var book_pages = mongoose.Schema({
    book_id: String,
    page_data: String,
    page_number: Number,
    total_page: Number,
    views: Number
});

var Book = mongoose.model('Book', book);
var Book_Pages = mongoose.model('Book_Pages', book_pages);

module.exports = {
    Book: Book,
    Book_Pages: Book_Pages
};