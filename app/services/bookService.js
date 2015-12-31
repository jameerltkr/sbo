'use strict';

var bookService = angular.module('bookService', [])

.service('getAllBooksService', function ($http, ENV) {
    //Get All Employees
    this.getAllBooks = function () {
        return $http.get(ENV.apiBaseUrl + "get-all-books/");
    }
})

.service('getPagesByBookName', function ($http, ENV) {
    //Get All Employees
    this.getPages = function (data) {
        return $http.get(ENV.apiBaseUrl + "get-pages?data=" + data);
    }
})




