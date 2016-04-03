'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ionic',
        'ngRoute',
        'myApp.home',
        'myApp.about',
        'myApp.version'
    ])
    .config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('menu', {
                url: "/menu",
                abstract: true,
                templateUrl: "Shared/menu.html",
            })
        $urlRouterProvider.otherwise('/menu/Home');
        // $routeProvider.otherwise('/Home');
    }]);
