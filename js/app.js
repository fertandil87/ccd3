'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'mm.foundation'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:lugar/:tipo/:documento', {templateUrl: 'partials/documentos.html', controller: 'DocumentosCtrl'});
  $routeProvider.otherwise({redirectTo: '/serranostandil/principal/posiciones'});
}]);
