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
        angular.extend($scope, {
            Auckland: {
                lat: -36.88566207736626,
                lng: 174.76140975952148 ,
                zoom: 12
            }
        });
    }]);

// var mymap = L.map('#routeMap').setView([51.505, -0.09], 13);