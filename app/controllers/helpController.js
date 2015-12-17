var app;
(function () {
    app = angular.module("sboHelpController", ['config']);
})();


app.controller('contactUsController', function ($scope, $window, ENV) {
    $scope.message = "hello contact us page";
    $scope.companyName = ENV.appName;

});

app.controller('faqController', function ($scope, $window) {
});