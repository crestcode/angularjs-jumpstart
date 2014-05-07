(function() {
    var OrdersController = function ($scope, $routeParams) {
        var customerId = $routeParams.customerId;
        $scope.orders = null;

        function init() {
            // Search the customers for the customerId
            for (var i=0, len=$scope.customers.length; i<len; i++) {
                if ($scope.customers[i].id === parseInt(customerId)) {
                    $scope.orders = $scope.customers[i].orders;
                    break;
                }
            }
        }

        $scope.customers = [
            {
                id: 1,
                joined:'2014-01-02',
                name:'John',
                city:'New York',
                orderTotal: 7.99,
                orders: [
                    {
                        id: 1,
                        product: 'Baseball',
                        total: 7.99
                    }
                ]
            },
            {
                id: 2,
                joined:'2014-04-12',
                name:'Tom',
                city:'Austin',
                orderTotal: 19.99,
                orders: [
                    {
                        id: 2,
                        product: 'Glove',
                        total: 9.995
                    },
                    {
                        id: 3,
                        product: 'Bat',
                        total: 9.995
                    }
                ]
            },
            {
                id: 3,
                joined: '1999-06-15',
                name:'Jackie',
                city:'Los Angeles',
                orderTotal:44.50,
                orders: [
                    {
                        id: 4,
                        product: 'Bag',
                        total: 40.00
                    },
                    {
                        id: 5,
                        product: 'Hat',
                        total: 4.5
                    }
                ]
            }
        ];

        init();
    };

    // dealing with minification
    OrdersController.$inject = ['$scope', '$routeParams'];

    angular.module('customersApp')
        .controller('OrdersController', OrdersController);
}());