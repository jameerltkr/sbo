var app;
(function () {
    app = angular.module("sboBookController", ['config', 'bookService']);
})();

app.controller('allBookController', function ($scope, $window, getAllBooksService) {
    $scope.book_category = 'All in one';

    //var allBooks = getAllBooksService.getAllBooks();

    //allBooks.then(function (books) {
    //    $scope.allBooks = books;
    //}, function (err) {
    //    alert('Error while getting values from database');
    //})

    $scope.data = "Hello Jameer!";
});

app.controller('newEditionBookController', function ($scope, $window) {
    $scope.book_category = 'New Edition Books';
});

app.controller('getBookByAuthorController', function ($scope, $window) {
    $scope.book_category = 'Filter Books by Author Name';
});

app.controller('getBookByNameController', function ($scope, $window) {
    $scope.book_category = 'Filter Books by Name';
});

app.controller('examBasedBookController', function ($scope, $window) {
    $scope.book_category = 'Exam Questions Based Books';
});

app.controller('downloadBookController', function ($scope, $window) {
});

app.controller('popularBookController', function ($scope, $window) {
    $scope.book_category = 'Popular Books';
});

app.controller('solvePaperController', function ($scope, $window) {
});

app.controller('downloadBookController', function ($scope, $window) {
});

app.controller('readBookController', function ($scope, $window, $location, getPagesByBookName) {
    var cliked_time = 1;

    var first_page = 1;
    var second_page = 2;

    var bookid = $location.search().id;

    if (bookid != undefined)
        $scope.bookid = bookid;

    var parameter1 = JSON.stringify({
        page_number: first_page,
        bookid: bookid
    });

    var parameter2 = JSON.stringify({
        page_number: second_page,
        bookid: bookid
    });

    if (cliked_time === 1) {

        var pages = getPagesByBookName.getPages(parameter1);

        pages.then(function (page) {
            if (typeof page.data.data != "object")
                $scope.pages = page.data.data;
            else
                $scope.pages = page.data.data[0].page_data;
        }, function (err) {
            //$scope.pages = page.data.data[0].page_data;
            //    alert('Error while getting pages from database');
        });

        var pages2 = getPagesByBookName.getPages(parameter2);

        pages2.then(function (page) {
            if (typeof page.data.data != "object")
                $scope.pages2 = page.data.data;
            else
                $scope.pages2 = page.data.data[0].page_data;
        }, function (err) {
            //$scope.pages = page.data.data[0].page_data;
            //    alert('Error while getting pages from database');
        });
    }

    $scope.next_page = function () {
        $scope.error = '';
        cliked_time += 1;

        first_page += 2;
        second_page += 2;

        var parameter = JSON.stringify({
            page_number: first_page,
            bookid: bookid
        });

        var parameter2 = JSON.stringify({
            page_number: second_page,
            bookid: bookid
        });

        var pages = getPagesByBookName.getPages(parameter);

        pages.then(function (page) {
            if (typeof page.data.data != "object")
                $scope.pages = page.data.data;
            else
                $scope.pages = page.data.data[0].page_data;
        }, function (err) {
            //$scope.pages = page.data.data[0].page_data;
            //    alert('Error while getting pages from database');
        });

        var pages2 = getPagesByBookName.getPages(parameter2);

        pages2.then(function (page) {
            if (typeof page.data.data != "object")
                $scope.pages2 = page.data.data;
            else
                $scope.pages2 = page.data.data[0].page_data;
        }, function (err) {
            //$scope.pages = page.data.data[0].page_data;
            //    alert('Error while getting pages from database');
        });
    };

    $scope.prev_page = function () {
        if (cliked_time > 1) {
            $scope.error = '';
            cliked_time -= 1;

            first_page -= 2;
            second_page -= 2;

            var parameter = JSON.stringify({
                page_number: first_page,
                bookid: bookid
            });

            var parameter2 = JSON.stringify({
                page_number: second_page,
                bookid: bookid
            });

            var pages = getPagesByBookName.getPages(parameter);

            pages.then(function (page) {
                if (typeof page.data.data != "object")
                    $scope.pages = page.data.data;
                else
                    $scope.pages = page.data.data[0].page_data;
            }, function (err) {
                //$scope.pages = page.data.data[0].page_data;
                //    alert('Error while getting pages from database');
            });

            var pages2 = getPagesByBookName.getPages(parameter2);

            pages2.then(function (page) {
                if (typeof page.data.data != "object")
                    $scope.pages2 = page.data.data;
                else
                    $scope.pages2 = page.data.data[0].page_data;
            }, function (err) {
                //$scope.pages = page.data.data[0].page_data;
                //    alert('Error while getting pages from database');
            });
        }
        else
            $scope.error = 'Already at 1st page';
    };

});

app.controller('categoryController', function ($scope, $window) {
    $scope.book_category = 'Category';
});