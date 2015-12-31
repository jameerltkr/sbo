var app;
(function () {
    app = angular.module("sboBookController", ['config', 'bookService']);
})();


app.controller('allBookController', function ($scope, $window, getAllBooksService) {
    //var allBooks = getAllBooksService.getAllBooks();

    //allBooks.then(function (books) {
    //    $scope.allBooks = books;
    //}, function (err) {
    //    alert('Error while getting values from database');
    //})

    $scope.data = "Hello Jameer!";
});

app.controller('newEditionBookController', function ($scope, $window) {
});

app.controller('getBookByAuthorController', function ($scope, $window) {
});

app.controller('getBookByNameController', function ($scope, $window) {
});

app.controller('examBasedBookController', function ($scope, $window) {
});

app.controller('downloadBookController', function ($scope, $window) {
});

app.controller('popularBookController', function ($scope, $window) {
});

app.controller('solvePaperController', function ($scope, $window) {
});

app.controller('downloadBookController', function ($scope, $window) {
});

app.controller('readBookController', function ($scope, $window, $location, getPagesByBookName) {
    var cliked_time = 1;

    $scope.next_page = function () {
        cliked_time += 1;

        var bookid = $location.search().id;

        var parameter = JSON.stringify({
            page_number: cliked_time,
            bookid: bookid
        });

        if (bookid != undefined)
            $scope.bookid = bookid;

        var pages = getPagesByBookName.getPages(parameter);

        pages.then(function (page) {
            $scope.pages = page;
        }, function (err) {
        //    alert('Error while getting pages from database');
        });
    };

});