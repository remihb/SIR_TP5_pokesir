/* jshint
laxcomma:true
, laxbreak:true
, unused : false
*/

'use strict';

/**
* @ngdoc function
* @name pokesirApp.controller:PokeInfosCtrl
* @description
* # PokeInfosCtrl
* Controller of the pokesirApp
*/
angular.module('pokesirApp')
.controller('PokeInfosCtrl', function($scope, $log, $routeParams, PokeFactory){
    $scope.loading = true;
    PokeFactory.pokemons.get({id : $routeParams.id}).$promise
    .then(function(elem) {
        $scope.loading = false;
        $scope.pokeInfo = elem;
    })
    .catch(function(error){
        $scope.loading = false;
        $log.warn(error);
    })
    ;
});
