'use strict';

angular.module('myApp.home', [
        // 'ionic',
        'ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/Home', {
                templateUrl: "Home/index.html",
                controller: 'HomeCtrl'
            });
    }])
    // .config(['$stateProvider',function ($stateProvider) {
    //     $stateProvider
    //         .state('menu.home', {
    //             url: "/Home",
    //             views: {
    //                 'mainContent': {
    //                     templateUrl: "Home/index.html",
    //                     controller: 'HomeCtrl'
    //
    //                 }
    //             }
    //         })
    // }])

    .controller('HomeCtrl', [function () {

    }]);