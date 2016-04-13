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

