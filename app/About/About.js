'use strict';

angular.module('myApp.about', ['ionic','ngRoute'])

    .config(['$stateProvider',function ($stateProvider) {
      $stateProvider
          .state('menu.about', {
            url: "/About",
            views: {
              'mainContent': {
                templateUrl: "About/index.html",
                controller: 'AboutCtrl'

              }
            }
          })
    }])

.controller('AboutCtrl', [function() {

}]);