var app;
(function () {
    app = angular.module("sboApp", ['config', 'sboAppService']);
})();


app.controller('homeController', function ($scope, $window) {
});

app.controller('mainController', function ($scope, $window) {
    $scope.message = "Hello";
});

