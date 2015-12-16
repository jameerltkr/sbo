var book_detail = require('../app/db/model/book-detail.js');

module.exports = function (app, socket) {
    app.get('/', function (req, res) {
        res.send('Hello');
    });

    app.get('/get-all-books', function (req, res) {
        book_detail.Book.find({}, function (err, data) {
            if (err) {
                res.send({
                    status: false,
                    message: 'An error occurred during fetching records from database.'
                });
            } else {
                res.send({
                    status: true,
                    data: data
                });
            }
        })
    })
};
