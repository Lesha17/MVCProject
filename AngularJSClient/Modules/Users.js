var users = angular.module("Users", []);

users.constant('address', 'http://localhost:56424/api/Users');

users.controller("UsersController", function ($scope, $http, address) {
    alert(address);
    $http.get(address)
.success(function (data, status, headers, config) {
    $scope.users = data;
})
    .error(function (data, status, headers, config) {
        alert('error');
    })
});