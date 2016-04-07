'use strict';

angular.module('myApp.home', [
        'ngRoute',
        'leaflet-directive'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/Home', {
                templateUrl: "Home/index.html",
                controller: 'HomeCtrl'
            });
    }])

    .controller('HomeCtrl', ['$scope',function ($scope) {

    }]);

// var mymap = L.map('#routeMap').setView([51.505, -0.09], 13);