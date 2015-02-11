var app = angular.module('app', ['ngRoute', 'firebase']);

app.config(['$routeProvider', function ($routeProvider) {
  
  $routeProvider
    .when('/', {
      templateUrl: 'js/views/homeTmpl.html',
      controller: 'MainCtrl'
    })
    .when('/support', {
      templateUrl: 'js/views/supportTmpl.html'
      
    })

}])