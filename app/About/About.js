'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/About', {
    templateUrl: 'About/index.html',
    controller: 'AboutCtrl'
  });
}])

.controller('AboutCtrl', [function() {

}]);