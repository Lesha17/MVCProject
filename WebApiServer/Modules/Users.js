var users = angular.module("Users", []);

users.constant('address', 'http://localhost:56424/api/Users');

users.controller("UsersController", function ($scope, $interval, $http, address) {
    $scope.opacity1 = 0.8;
    $scope.opacity2 = 0.6;
    $scope.opacity3 = 0.2;
    $scope.opacity4 = 0.0;

    var stop = $interval(function () {
        $scope.opacity1 = ($scope.opacity1 + 0.2) % 0.8;
        $scope.opacity2 = ($scope.opacity2 + 0.2) % 0.8;
        $scope.opacity3 = ($scope.opacity3 + 0.2) % 0.8;
        $scope.opacity4 = ($scope.opacity4 + 0.2) % 0.8;
    }, 120);

    $scope.load = false;

    $http.get(address)
.success(function (data, status, headers, config) {
    $scope.Users = data;
    $scope.load = true;
})
    .error(function (data, status, headers, config) {
        alert('error');
    });
    $scope.submit_put = function ($user) {
        
        $http.put(address + '/' + $user.Id, $user)
        .success(function (data, status, headers, config) {
            
        })
        .error(function (data, status, headers, config) {
            alert('error');
        });
    };

    $scope.NewUser = { 'Id': 0, 'Name': '', 'Login': '', 'Password': '', 'CompanyID': undefined, 'ContractStatus': undefined };
    $scope.submit_post = function () {
        $http.post(address, $scope.NewUser)
        .success(function (data, status, headers, config) {
            $scope.NewUser.Id = data.Id;
            $scope.Users = $scope.Users.concat([$scope.NewUser]);
            $scope.NewUser = { 'Id': 0, 'Name': '', 'Login': '', 'Password': '', 'CompanyID': undefined, 'ContractStatus': undefined };
        })
        .error(function (data, status, headers, config) {
            alert('error');
        });
    };

    $scope.delete = function ($user) {
        $http.delete(address + '/' + $user.Id)
        .success(function (data, status, headers, config) {
            var i = $scope.Users.indexOf($user);
            if (i > -1) {
                $scope.Users.splice(i, 1);
            }
        })
        .error(function (data, status, headers, config) {
            alert('error');
        });
    };
});
