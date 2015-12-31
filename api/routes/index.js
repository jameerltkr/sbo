var book_detail = require('../app/db/model/book-detail.js');

module.exports = function (app, socket) {

    // Route URL
    app.get('/', function (req, res) {
        res.send('Hello');
    });

    // Get all books
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

    // Returns book list based on book name
    app.get('/get-book-by-book-name', function (req, res) {
        var book_name = req.param('book_name');
        book_detail.Book.find({ 'book_name': book_name }, function (err, data) {
            if (err) {
                console.log('Error occurred while finding list of books based on book name');
                res.status(400).send({
                    status: false,
                    message: 'Error occurred while finding list of books based on book name'
                });
            }
            if (data) {
                res.status(200).send({
                    status: true,
                    data: data
                });
            }
        });
    });

    // Returns book list based on author name
    app.get('/get-book-by-author-name', function (req, res) {
        var author_name = req.param('author_name');
        book_detail.Book.find({
            author_name: author_name
        }, function (err, data) {
            if (err) {
                res.status.send({
                    status: false,
                    message: 'Error occurred while performing find request in database'
                });
            }
            if (data) {
                res.status(200).send({
                    status: true,
                    data: data
                });
            }
        });
    });

    // Returns book list by edition year
    app.get('/get-book-by-edition-year', function (req, res) {
        var edition_year=req.param('edition_year');
        book_detail.Book.find({
            edition_year: edition_year
        }, function (err, data) {
            if (err)
                res.status(400).send({
                    status: false,
                    message: 'Could not get books by edition year due to error: ' + err
                });
            if (data) {
                res.status(200).send({
                    status: true,
                    data: data
                });
            }
        });
    })

    // Counts all available books in database
    app.get('/count-all-available-books', function (req, res) {
        book_detail.Book.count(function (err, result) {
            if (err) {
                res.status(400).send({
                    status: false,
                    message: 'Could not count number of total book records due to error: ' + err
                });
            }
            if (result) {
                rs.status(200).send({
                    status: true,
                    result: result
                });
            }
        });
    });

    app.get('/get-pages', function (req, res) {
        var data = req.param('data');

        var bookid = JSON.parse(data).bookid;
        var page_number = JSON.parse(data).page_number;

        console.log('Book id: ' + bookid);
        console.log('Page number: ' + page_number);
    });


    //app.get('/')

};
