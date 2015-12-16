// create the module and name it sboAppService
// also include ngRoute for all our routing needs
var sboAppService = angular.module('sboApp', ['ngRoute']);

// configure our routes
sboAppService.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: '../home/home.html',
            controller: 'homeController'
        })

        .when('/login', {
            templateUrl: '../user/login.html',
            controller: 'loginController'
        })

        .when('/sign-up', {
            templateUrl: '../user/sign-up.html',
            controller: 'signupController'
        })

        // route for the home page
        .when('/all-books', {
            templateUrl: '../books/all-books.html',
            controller: 'allBookController'
        })

        // route for the about page
        .when('/new-edition-books', {
            templateUrl: '../books/new-edition-books.html',
            controller: 'newEditionBookController'
        })

        // route for the contact page
        .when('/get-books-by-author', {
            templateUrl: '../books/get-books-by-author.html',
            controller: 'getBookByAuthorController'
        })

        .when('/get-books-by-name', {
            templateUrl: '../books/get-books-by-name.html',
            controller: 'getBookByNameController'
        })

        .when('/exam-question-based-books', {
            templateUrl: '../books/exam-question-based-books.html',
            controller: 'examBasedBookController'
        })

        .when('/download-books', {
            templateUrl: '../books/download-books.html',
            controller: 'downloadBookController'
        })

        .when('/popular-books', {
            templateUrl: '../books/popular-books.html',
            controller: 'popularBookController'
        })

        .when('/solve-papers', {
            templateUrl: '../books/solve-papers.html',
            controller: 'solvePaperController'
        })

        .when('/contact-us', {
            templateUrl: '../help/contact-us.html',
            controller: 'contactUsController'
        })

        .when('/faq', {
            templateUrl: '../help/faq.html',
            controller: 'faqController'
        })

        //.when('/contact', {
        //    templateUrl: 'pages/contact.html',
        //    controller: 'contactController'
        //})

        //.when('/contact', {
        //    templateUrl: 'pages/contact.html',
        //    controller: 'contactController'
        //})

        //.when('/contact', {
        //    templateUrl: 'pages/contact.html',
        //    controller: 'contactController'
        //})

        //.when('/contact', {
        //    templateUrl: 'pages/contact.html',
        //    controller: 'contactController'
        //});
});