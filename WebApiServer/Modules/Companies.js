var users = angular.module("Companies", []);

users.constant('address', 'http://localhost:56424/api/Companies');

users.controller("CompaniesController", function ($scope, $http, $interval, address) {
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
    $scope.Companies = data;
    $scope.load = true;
})
    .error(function (data, status, headers, config) {
        alert('error');
    });
    $scope.submit_put = function ($company) {
        alert(address + '/' + $company.Id);
        $http.put(address + '/' + $company.Id, $company)
        .success(function (data, status, headers, config) {

        })
        .error(function (data, status, headers, config) {
            alert('error');
        });
    };

    $scope.NewCompany = { 'Id': 0, 'Name': ''};
    $scope.submit_post = function () {
        $http.post(address, $scope.NewCompany)
        .success(function (data, status, headers, config) {
            $scope.NewCompany.Id = data.Id;
            $scope.Companies = $scope.Companies.concat([$scope.NewCompany]);
            $scope.NewCompany = { 'Id': 0, 'Name': ''};
        })
        .error(function (data, status, headers, config) {
            alert('error');
        });
    };

    $scope.delete = function ($company) {
        $http.delete(address + '/' + $company.Id)
        .success(function (data, status, headers, config) {
            var i = $scope.Companies.indexOf($company);
            if (i > -1) {
                $scope.Companies.splice(i, 1);
            }
        })
        .error(function (data, status, headers, config) {
            alert('error');
        });
    };
});
