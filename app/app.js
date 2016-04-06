'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        // 'ionic',
        'ngRoute',
        'mobile-angular-ui',
        'mobile-angular-ui.gestures',
        'myApp.home',
        'myApp.about',
        'myApp.version'
    ])
    .run(function ($transform) {
        window.$transform = $transform;
    })
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise('/Home');
    }])
// .config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
//     $stateProvider
//         .state('menu', {
//             url: "/menu",
//             abstract: true,
//             templateUrl: "Shared/menu.html",
//         })
//     $urlRouterProvider.otherwise('/menu/Home');
//     // $routeProvider.otherwise('/Home');
// }]);
