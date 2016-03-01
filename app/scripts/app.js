/* jshint
laxcomma:true
, laxbreak:true
, unused : false
*/

'use strict';

/**
* @ngdoc overview
* @name pokesirApp
* @description
* # pokesirApp
*
* Main module of the application.
*/
angular
.module('pokesirApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.select',
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    })
    .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'PokeSearchCtrl',
        controllerAs: 'search'
    })
    .when('/pokemon/:id', {
        templateUrl: 'views/pokemon.html',
        controller: 'PokeInfosCtrl',
        controllerAs: 'pokemon'
    })
    .otherwise({
        redirectTo: '/'
    });
});

window.onresize = function(){
    if ((window.innerHeight/window.innerWidth) > 0.62)
    {
        $('html').css('background-position', 'left bottom');
    }
    else {
        $('html').css('background-position', 'right bottom');
    }
};
