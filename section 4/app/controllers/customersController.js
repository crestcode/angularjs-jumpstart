(function() {
    var CustomersController = function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [{name:'John', city:'New York', joined:'2014-01-02'},{name:'Tom', city:'Austin', orderTotal:12},{name:'Jackie', city:'Los Angeles', orderTotal:14.39},{name:'John', city:'Seattle', orderTotal:44.444432}]
        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };

    // dealing with minification
    CustomersController.$inject = ['$scope'];

    angular.module('customersApp')
        .controller('CustomersController', CustomersController);
}());