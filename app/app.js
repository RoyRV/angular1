 angular.module('bluprint', [
     'ngRoute',
     'bluprint.home',
 ])
.config(function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeCtrl',
            templateUrl: 'app/components/home/home.html'
        });

})
.run(function () {
    
 });