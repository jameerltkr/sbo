angular.module("sboHomeController", ['config'])


.controller('homeController', ['$scope', '$http', function ($scope, $window) {
    $scope.message = "Hello";
}])

.controller('mainController', function ($scope, $window) {
    $scope.message = "Hello";
});

