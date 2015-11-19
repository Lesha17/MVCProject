(function () {
    'use strict';

    angular
        .module('app')
        .controller('controller', controller);

    controller.$inject = ['$location']; 

    function controller($location) {
        /* jshint validthis:true */
        function UsersController($scope) {
            $scope.Users = [{ Id: '1', Name: 'Ivan', Login: 'Vano666', Password: 'Vanka', CompanyID: '1', ContractStatus: '0' },
            { Id: '2', Name: 'Alex', Login: 'Alex911', Password: 'Aleshka', CompanyID: '1', ContractStatus: '2' }];
        }
    }
})();
