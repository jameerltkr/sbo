'use strict';

var bookService = angular.module('bookService', [])

.service('getAllBooksService', function ($http, ENV) {
    //Get All Books
    this.getAllBooks = function () {
        return $http.get(ENV.apiBaseUrl + "get-all-books/");
    }
})

.service('getPagesByBookName', function ($http, ENV) {
    //Get Pages
    this.getPages = function (data) {
        return $http.get(ENV.apiBaseUrl + "get-pages?data=" + data);
    }
})




