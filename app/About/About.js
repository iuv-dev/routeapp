'use strict';

angular.module('myApp.about', [
    // 'ionic',
    'ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/About', {
                templateUrl: "About/index.html",
                controller: 'AboutCtrl'
            });
    }])
    // .config(['$stateProvider',function ($stateProvider) {
    //   $stateProvider
    //       .state('menu.about', {
    //         url: "/About",
    //         views: {
    //           'mainContent': {
    //             templateUrl: "About/index.html",
    //             controller: 'AboutCtrl'
    //
    //           }
    //         }
    //       })
    // }])

.controller('AboutCtrl', [function() {

}]);