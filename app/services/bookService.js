'use strict';

var bookService = angular.module('bookService', [])

.service('getAllBooksService', function ($http, ENV) {
    //Get All Employees
    this.getAllBooks = function () {
        return $http.get(ENV.apiBaseUrl + "get-all-books/");
    }
})



