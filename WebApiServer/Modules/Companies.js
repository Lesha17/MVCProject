var users = angular.module("Companies", []);

users.constant('address', 'http://localhost:56424/api/Companies');

users.controller("CompaniesController", function ($scope, $http, address) {
    $http.get(address)
.success(function (data, status, headers, config) {
    $scope.Companies = data;
})
    .error(function (data, status, headers, config) {
        alert('error');
    })
});