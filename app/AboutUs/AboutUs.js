'use strict';

angular.module('myApp.aboutus', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/AboutUs', {
    templateUrl: 'AboutUs/index.html',
    controller: 'AboutUsCtrl'
  });
}])

.controller('AboutUsCtrl', [function() {

}]);