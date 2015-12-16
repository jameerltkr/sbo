var app;
(function () {
    app = angular.module("sboApp", ['config', 'sboAppService']);
})();


app.controller('allBookController', function ($scope, $window, getAllBooksService) {
    var allBooks = bookService.getAllBooks();

    allBooks.then(function (books) {
        $scope.allBooks = books;
    }, function (err) {
        alert('Error while getting values from database');
    })
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