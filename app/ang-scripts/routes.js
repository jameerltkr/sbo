// create the module and name it sboAppService
// also include ngRoute for all our routing needs
var sboRoutes = angular.module('sboApp', ['ngRoute', 'sboHomeController', 'sboBookController', 'sboHeaderController', 'sboHelpController', 'sboUserController']);

//angular.module('sboApp').controller('homeController', ['$scope', '$http', function ($scope, $http) {
//}]);

// configure our routes
sboRoutes.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider

            // route for home page
            .when('/', {
                templateUrl: '../home/home.html',
                controller: 'homeController'
            })

            // route for login page
            .when('/login', {
                templateUrl: '../user/login.html',
                controller: 'loginController'
            })

            // route for sign up page
            .when('/sign-up', {
                templateUrl: '../user/sign-up.html',
                controller: 'signupController'
            })

            // route for all books page
            .when('/all-books', {
                templateUrl: '../books/all-books.html',
                controller: 'allBookController'
            })

            // route for the new edition book page
            .when('/new-edition-books', {
                templateUrl: '../books/new-edition-books.html',
                controller: 'newEditionBookController'
            })

            // route for the get book by author name page
            .when('/get-books-by-author', {
                templateUrl: '../books/get-books-by-author.html',
                controller: 'getBookByAuthorController'
            })

            // route for the get book by book name page
            .when('/get-books-by-name', {
                templateUrl: '../books/get-books-by-name.html',
                controller: 'getBookByNameController'
            })

            // route for the exam based books page
            .when('/exam-question-based-books', {
                templateUrl: '../books/exam-question-based-books.html',
                controller: 'examBasedBookController'
            })

            // route for the download book page
            .when('/download-books', {
                templateUrl: '../books/download-books.html',
                controller: 'downloadBookController'
            })

            // route for the popular book page
            .when('/popular-books', {
                templateUrl: '../books/popular-books.html',
                controller: 'popularBookController'
            })

            // route for the solve paper page
            .when('/solve-papers', {
                templateUrl: '../books/solve-papers.html',
                controller: 'solvePaperController'
            })

            // route for the contact us page
            .when('/contact-us', {
                templateUrl: '../help/contact-us.html',
                controller: 'contactUsController'
            })

            // route for the frequently asked questions page
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
    }]);

