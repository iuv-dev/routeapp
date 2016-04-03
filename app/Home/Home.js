'use strict';

angular.module('myApp.home', ['ionic', 'ngRoute'])

    .config(['$stateProvider',function ($stateProvider) {
        $stateProvider
            .state('menu.home', {
                url: "/Home",
                views: {
                    'mainContent': {
                        templateUrl: "Home/index.html",
                        controller: 'HomeCtrl'

                    }
                }
            })
    }])

    .controller('HomeCtrl', [function () {

    }]);