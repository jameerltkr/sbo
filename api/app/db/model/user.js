/* Site model Menu */
var mongoose = require('mongoose');

var user = mongoose.Schema({
    user_name: String,
    full_name: String,
    total_books_uploaded: Number,
    total_books_read: Number,
    address: String
});

var User = mongoose.model('User', user);

module.exports = {
    User: User
};